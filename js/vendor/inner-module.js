angular.module("innerModule", ["config"])

    // Shows inline embedded video vs image preview with popup depending on container width and screen mode (mobile/desktop)
    // Example: <div data-youtube-video>...<div class="video-container">...
    // Used in: PopupVideo.cshtml partial (video-block page type)
    .directive("youtubeVideo", ["$timeout", "mainFactory", function ($timeout, mf) {
    	return {
    		restrict: 'A',
    		scope: {},
    		template: function (elem) { return elem.html(); },
    		controller: function ($scope, $element) {
    			$scope.openInPopup = false;
    			$scope.$watch(function () { return $(".video-container", $element).width(); }, function (width) {
    				if ((width > ($(".container.wripper").width() / 2) + 30) || (mf.screenMode() == "mobile")) {
    					$scope.openInPopup = false;
    				} else {
    					$scope.openInPopup = true;
    				};
    			});
    			$(window).resize(function () {
    				$scope.$apply();
    			});
    		}
    	}
    }])

    // Creates scope with isolated variables
    .directive("childScope", [function () {
    	return {
    		restrict: 'A',
    		scope: true,
    		template: function (elem) {
    			return elem.html();
    		},
    		link: function () {}
    	}
    }])

    // Gets html template from inline script element
    // Example: <div data-template="elementId"></div> ... <script type="text/ng-template" id="elementId">...some html layout...</script>
    // Used in: Market Bell Ceremony detailed page, Latest Ceremony carousel component
    .directive("template", [function () {
    	return {
    		restrict: 'A',
    		scope: true,
    		templateUrl: function (element, attrs) {
    			return attrs.template;
    		}
    	}
    }])

    // Directive sets height of the element depending on its width and ratio
    // Example: <div data-rectangle="{{16/9}}">...content...</div>
    // Used in: Market Bell Ceremonies landing page and Blog landing page ("tile"), youtube video partials
    .directive("rectangle", [function () {
    	return {
    		restrict: 'A',
    		link: function (scope, element, attrs) {
    			var getHeight = function (w) {
    				var k = attrs.rectangle ? attrs.rectangle : 1;
    				return w / k;
    			}
    			scope.$watch(function () { return $(element).width(); }, function (width) {
    				if (!width)
    					return;
    				$(element).height(getHeight(width));
    			});
    			$(window).on("resize", function () {
    				if (!$(element).width())
    					return;
    				$(element).height(getHeight($(element).width()));
    			});
    		}
    	}
    }])

    // Sticky menu direcive.
    .directive("sticky", ["mainFactory", "$timeout", function (mf, $timeout) {
    	return {
    		restrict: 'A',
    		scope: {
    			stickyShow: "=?",
    			height: "=?",
    			stickyElement: "@",
    			stickyArea: "@",
    			offsets: "@"
    		},
    		link: function (scope, element) {
    			var offsets = scope.$eval(scope.offsets);
    			$timeout(function () {
    				scope.stickyShow = false;
    				var stickyElement = $(scope.stickyElement);
    				var stickyArea = $(scope.stickyArea);
    				stickyElement.css("position", "fixed");

    				var stickyNavigation = function () {
    					scope.height = $(element).height();
    					stickyElement.width(element.width());
    					stickyElement.css('left', element.offset().left);
    					var offsetTop = offsets[mf.screenMode()].top;
    					var offsetBottom = offsets[mf.screenMode()].bottom;
    					/*B-46400 - Changes Begin - To Fix - Sticky Subnav not displayed when featured article used in the page*/
    					var featuredArticleHeight = ($('#above-main-body').height() == null) ? 0 : $('#above-main-body').height();
    					if (featuredArticleHeight == 0) {
    						for (var i = 0; i < $('#above-main-body').children().length ; i++) {
    							featuredArticleHeight = featuredArticleHeight + ($($('#above-main-body').children()[i]).height())
    						}
    					}
    					/*B-46400 - Changes End - To Fix - Sticky Subnav not displayed when featured article used in the page*/
    					var stickyAreaTop = ($(document).scrollTop() - stickyArea.offset().top + offsetTop) + featuredArticleHeight;
    					var stickyAreaBottom = $(document).scrollTop() - stickyArea.offset().top - stickyArea.height() + offsetBottom;
    					if (stickyAreaTop > 0)
    						scope.stickyShow = true;
    					else
    						scope.stickyShow = false;
    					if (stickyAreaBottom > 0)
    						scope.stickyShow = false;
    					$timeout(function() { scope.$apply(); });
    				};

    				stickyNavigation();

    				$(window).on("resize scroll", function () {
    					stickyNavigation();
    				});
    			});
    		}
    	}
    }])

    // Directive for a submenu navigation
    .directive("linkScroller", ["$timeout", "mainFactory", "$rootScope", function ($timeout, mf ,$window) {
        
    	var disableWatch = false;
    	return {
    		restrict: 'A',
    		scope: {
    			stickyHeight: "=?",
    			trackId: "=?",
    			padding: "=?"
    		},
    		link: function (scope, element, attrs) {
    			$(element).css({ userSelect: 'none' });
    			var myScroll = new IScroll(element[0], {
    				scrollbars: true,
    				scrollX: true,
    				scrollY: false,
    				mouseWheel: false,
    				interactiveScrollbars: true,
    				fadeScrollbars: true,
    				probeType: 3,
    				preventDefault: false
    			});
    			var padding = angular.copy(scope.padding);
    			var prev = $(attrs.prev, element);
    			var next = $(attrs.next, element);
    			if (prev) {
    				prev.css({ userSelect: 'none' });
    				prev.click(function () { myScroll.scrollBy(100, 0, 300, IScroll.utils.ease.circular); });
    			}
                if (next) {
                    next.css({ userSelect: 'none' });
                    next.click(function () { myScroll.scrollBy(-100, 0, 300, IScroll.utils.ease.circular); });
                }


    			var getPosition = function (el, offset) {
    				offset = offset ? offset : 0;
    				var containerWidth = element.width();
    				var elOffset = ($(el).offset().left - $(element).offset().left);
    				// out of left side
    				if ((elOffset - offset) < 0) {
    					return "leftOut";
    				}
    				// out of right side
    				if ((elOffset + $(el).width() + offset) > containerWidth) {
    					return "rightOut";
    				}
    				return "visible";
    			}

                var showHideArrows = function () {
                    $timeout(function () {
                        if (getPosition($(".item", element).first()) != "visible")
                            $(prev).show();
                        else
                            $(prev).hide();
                        if (getPosition($(".item", element).last()) != "visible")
                            $(next).show();
                        else
                            $(next).hide();
                    }, 200);
                }

                $(window).resize(function(){
                    $timeout(function() {
                    var menuWidth = 0;
                    $(".item", element).each(function () {
                        var item = $(this);
                        var width = $("i", item).width();
                        item.width(width);
                        menuWidth += item.outerWidth() + 4;
                    });
                    element.find(">:first-child").width(menuWidth);
                    myScroll.refresh();
                    scope.$watch(function () { return mf.screenMode(); }, function (screen) {
                        myScroll.refresh();
                        menuWidth = 0;
                        $(".item", element).each(function () {
                            menuWidth += $(this).outerWidth() + 4;
                        });
                        element.find(">:first-child").width(menuWidth);
                        myScroll.refresh();
                        // show/hide scrollbar
                        if (screen == "desktop") {
                            $(".iScrollHorizontalScrollbar", element).hide();
                        } else {
                            $(".iScrollHorizontalScrollbar", element).show();
                        }
                    });
                });
                });

                // scope.$watch("stickyHeight", function (height) {
                //     if (!height)
                //         return;
                //     if (mf.screenMode() == "desktop")
                //         scope.padding = padding.desktop + height;
                //     else
                //         scope.padding = padding.mobile + height;
                // });
                $timeout(function() {
                    var menuWidth = 0;
                    $(".item", element).each(function () {
                        var item = $(this);
                        var width = $("i", item).width();
                        item.width(width);
                        menuWidth += item.outerWidth() + 4;
                    });
                    element.find(">:first-child").width(menuWidth);
                    myScroll.refresh();
                    scope.$watch(function () { return mf.screenMode(); }, function (screen) {
                        myScroll.refresh();
                        menuWidth = 0;
                        $(".item", element).each(function () {
                            menuWidth += $(this).outerWidth() + 4;
                        });
                        element.find(">:first-child").width(menuWidth);
                        myScroll.refresh();
                        // show/hide scrollbar
                        if (screen == "desktop") {
                            $(".iScrollHorizontalScrollbar", element).hide();
                        } else {
                            $(".iScrollHorizontalScrollbar", element).show();
                        }
                    });
                });
                myScroll.on('scroll', function () {
                    showHideArrows();
                });
                myScroll.on('scrollStart', function (e) {
                    $(".item a", element).addClass("dragging");
                });
                myScroll.on('scrollEnd', function () {
                    $(".item a", element).removeClass("dragging");
                });
                showHideArrows();
                $('.dragging').on("click", function (e) {
                    e.preventDefault();
                });
                $(".item a", element).on("dragstart", function (e) {
                    return false;
                });

                angular.element($window).bind('resize', function(){

                                    });

    			// mark active menu item
    			var re = "^(/)?(.*?)(/index\.(html|htm|aspx|asp))?(/)?$";
    			var locPath = (new RegExp(re, "gi")).exec(window.location.pathname)[2] + "/";
    			$(element).find("a").each(function (i) {
    				var a = $(this);
    				// skip if hash is set
    				if (a[0].hash) {
    					return;
    				}
    				var aPath = (new RegExp(re, "gi")).exec(a[0].pathname)[2] + "/";
    				if (new RegExp("^" + aPath + "(/?)(.*)$", "gi").exec(locPath)) {
    					a.addClass("active");
    					$timeout(function () {
    						if (i == 0)
    							return;
    						myScroll.scrollToElement(a.closest("div")[0], 500);
    					}, 400);
    				}
    			});

            var divs = [];


                // jump link function in inner module
            $('#sticky_show .child-row .item a[href*=#]').each(function(){ // getting the links with a hash
                var url = $(this).attr('href'); // getting the href attr in order to know where to go
                var url2 = url.slice(1); // removing the hash

                if (url.slice(0, 1) == "#") { // checking if is an internal anchor
                    if (url.slice(0, 1) == "#") { // checking again 
                        $('[id="' + url2 + '"]').addClass('questedItem'); // adding a class to know if this is a destiny
                    }

                };
            });

				
				/* destiny divs */
            $(window).load(function(){ //

                $('.questedItem').each(function eachElement() { // checking each div that has a link in the menu pointing to him
                    // cache the jQuery object
                    var $this = $(this);
                    var heightSticked = $('#sticky_show').height(); // getting the height of the menu
                    var position = $this.offset(); // getting the offset of the element
                    
                    $(window).ready(function () { // we refreshing the page
                        var min = position.top - heightSticked - 67; // getting the vertical distance (where the div begins)
                        var max = position.top + $this.height(); //  getting the end of the div
                        var advance = $(window).scrollTop(); // getting the actual position of the scroll

                        if (min <= advance && max >= advance) { // conditions to meet in order to stay inside a div 

                            $('.item a').removeClass('active'); // removing the active class from each .item
                            $('a[href="#' + $this.attr('id') + '"]').addClass('active'); // giving the active class to the link that point to this
                            myScroll.scrollToElement($('a[href="#' + $this.attr('id') + '"]').first().parent().closest(".item")[0], 300, 0); // moving between elements
                        } else { // if conditions not meeted
                            $('a[href="#' + $this.attr('id') + '"]').removeClass('active'); // only removing the active class in each .item
                        };
                    });

                    $(window).scroll(function(){ // when scrolling the page
                        var min = position.top - heightSticked - 67; // getting the vertical distance (where the div begins) 
                        var max = position.top + $this.height(); //  getting the end of the div
                        var advance = $(window).scrollTop(); // getting the actual position of the scroll
                        
                        if (min <= advance && max >= advance) { // conditions to meet in order to stay inside a div
                            
                            $('.item a').removeClass('active'); // removing the active class from each .item
                            $('a[href="#' + $this.attr('id') + '"]').addClass('active'); // giving the active class to the link that point to this
                            myScroll.scrollToElement($('a[href="#' + $this.attr('id') + '"]').first().parent().closest(".item")[0], 300, 0); // moving between elements
                        } else { // if conditions not meeted
                            $('a[href="#' + $this.attr('id') + '"]').removeClass('active'); // only removing the active class in each .item
                        };
                    });

                   
                });

            });
            
				
	$('.child-row .item a[href*=#]').each(function(){ // every menu link
        var url = $(this).attr('href'); // get href attribute
        var url2 = url.slice(1); // remove hash
        var elementr = $(this); // caching the jquery object
		var heightSticked = $('#sticky_show').height(); // getting menu height
		
        if (url.slice(0, 1) == "#") { // if first character is hash
            var vars = {}; // group of variables
            if (url.slice(0, 1) == "#") { // if hash
                var newCount = parseInt($('[id="' + url2 + '"]').offset().top) - heightSticked; // get height
                $(this).attr('rel', newCount); // creating a rel attribute
            }

        }
          

      
        var indexed = parseInt($(this).parent().index()); // getting ined of each link parent
        if (url.slice(0, 1) == "#") { // if have hash
            vars['groupvar' + indexed] = newCount; // creating new element in the group
        }



     //    $(window).scroll(function(){
     //        var avance = $(window).scrollTop();
     //        if(avance >= newCount-4){
     //          $('.child-row .item a[href*=#]').removeClass('active');
     //          $('.item-'+indexados).addClass('active');
			  // myScroll.scrollToElement($('.item-'+indexados).closest(".item")[0], 300, 0);
     //        }else{
     //          $('.item-'+indexados).removeClass('active');
     //        }
     //      });
          // $('.item-'+indexado).addClass('active');
          // $(this).addClass('active');

    })
	
	// end of items scroll

    			element.find(".item a").on("click", function () {
    				if ($(this).hasClass("dragging"))

    					return;
    				disableWatch = false;
    				scope.trackId = $(this)[0].hash.substr(1);
    				if (getPosition($(this).closest(".item"), 15) != "visible")
    					myScroll.scrollToElement($(this).closest(".item")[0], 300, 0);
    				scope.$apply();
    				disableWatch = true;
    				$timeout(function () {
    					disableWatch = false;
    				}, 2500);
    			});

    			scope.$watch("trackId", function (val) {
                    
    				if (!$(".item a[data-du-smooth-scroll]").length)
    					return;
    				if (val == null) {
    					// scroll menu to the initial position
    					myScroll.scrollTo(0, 0, 300);
    					$timeout(function () { myScroll.scrollTo(0, 0, 100); }, 400);
    					$(".item a", element).removeClass("active");

    					return;
    				}
    				if (disableWatch)
    					return;
    				// scrollMenu(val);
    			});


 
    		}
    	}
    }])

    // Bootstrap modal wrapper
    .directive("bootstrapModal", ["$modal", "$timeout", "mainFactory", function ($modal, $timeout, mf) {
    	return {
    		restrict: "A",
    		scope: {
    			"open": "=bootstrapModal",
    			"cssClass": "@",
    			"delay": "@", // delay before open popup
    			"object": "=",
    			"loading": "="
    		},

    		link: function (scope, element, attrs) {
    			var modalInstance;
    			var html = element.html();
    			var fadeinTime = 500;
    			var fadeoutTime = 400;
    			element.remove();

    			var recalcPopup = function () {
    				//var verticalMargin = 0;
    				var minMargin = 0;
    				var maxMargin = 0;
    				if (attrs && attrs.type == "image") {
    					if (mf.screenMode() == "mobile") {
    						vMargin = 30;
    						gMargin = 30;
    						var verticalMargin = $(".modal-body .modal-social").outerHeight() + $(".modal-content .b-close").outerHeight() + vMargin;
    					}
    					if (mf.screenMode() == "desktop") {
    						vMargin = 104;
    						gMargin = 80;
    						var verticalMargin = $(".modal-body .modal-social").outerHeight() + vMargin;
    					}
    					var horizontalMargin = gMargin;

    					var screenWidth = $(window).width();
    					var screenHeight = $(window).height();

    					var k = screenWidth / screenHeight;
    					screenHeight = screenHeight;
    					screenWidth = k * screenHeight - horizontalMargin;

    					// calculate actual popup width
    					var widthByImage = $(".modal-dialog img")[0].naturalWidth + parseInt($(".modal-body").css("padding-left")) * 2 + parseInt($(".modal-content").css("border-left-width")) * 2;

    					if (widthByImage > screenWidth) {
    						$(".modal-dialog").width(screenWidth);
    					} else {
    						$(".modal-dialog").width(widthByImage);
    					}

                        // fit popup height
                        var heightByImage = $(".modal-dialog").outerHeight() + verticalMargin;
                        if (heightByImage > screenHeight) {
                            var w = ($(".modal-dialog").width() / (heightByImage - vMargin)) * (screenHeight - verticalMargin);
                            $(".modal-dialog").width(w);
                        }
                        //D - 59447 - To fix issue - Image not displayed properly in modal pop-up in Mobile devices.
                        if (mf.screenMode() == "mobile") { 
                            $(".modal-dialog").css('width', '');
                        }
						//setTimeout(function () { $(".modal-body").click();}, 100);
                    } else if (attrs.type == "carousel") {
                        $(".modal-dialog").css('width', '');
                    }
                    // center popup
                    var left = ($(window).width() - $(".modal-dialog").width()) / 2;
                    var top = ($(window).height() - $(".modal-dialog").height()) / 2;
                    if (top < 0)
                        top = 0;
                    $(".modal-dialog").css({ "top": top, "left": left, "visibility": "visible" });
                }

    			var modalInstanceCtrl = function ($scope, $modalInstance) {
    				$scope.$watch(function () { return scope.object; }, function (val) {
    					if (!val) return;
    					$.extend(true, $scope, scope.object);
    				}, true);
    				$.extend(true, $scope, scope.object);

    				$scope.close = function () {
    					$modalInstance.dismiss('cancel');
    				};

    				$scope.opened = true;

    				$scope.share = mf.addThisShare;

    				$scope.$watch(function() {
    					return $('.modal-content').height();
    				}, function () {
    					recalcPopup();
    				});

    				$scope.$watch(function () { return scope.loading; }, function (val) {
    					if (val == false)
    						$('.modal-dialog').velocity('fadeIn', fadeinTime);
    				});

    				$modalInstance.opened.then(function () {
    					$timeout(function () {
    						if (scope.cssClass) {
    							$('.modal-dialog').addClass(scope.cssClass);
    						}
    						if (scope.delay || attrs.loading) {
    							$('.modal .loader').show();
    							scope.delay = parseInt(scope.delay);
    						} else {
    							scope.delay = 0;
    						}
    						// call addthis after render dynamic content
    						addthis.toolbox('.addthis_toolbox');
    						$('.modal').css('opacity', 1);
    						$('.modal-dialog').css('opacity', 0);
    						$('.modal').velocity({ backgroundColorAlpha: 0 }, 0);
    						$('.modal').velocity({ backgroundColorAlpha: 0.9 }, fadeinTime);
    						if (!attrs.loading)
    							$timeout(function() {
    								$('.modal-dialog').velocity('fadeIn', fadeinTime);
    							}, scope.delay);
    					});
    					$(window).resize(function () {
    						if (!$('.modal-dialog').length)
    							return;
    						$timeout(function () { recalcPopup(); });
    					});
    				});

    				$modalInstance.result.then(function () {
    				}, function () {
    				})["finally"](function () {
    					$('.modal').velocity('fadeOut', fadeoutTime);
    					scope.open = false;
    					$scope.opened = false;
    				});
    			};

    			scope.$watch("open", function (open) {
    				if (window.self == window.top)
    				{                    
    					if (open) {
    						modalInstance = $modal.open({
    							template: html,
    							controller: modalInstanceCtrl
    						});
    						$timeout(function () {
    							if (attrs && attrs.type == "image") {
    								$(".modal .modal-body").mouseenter(function () {
    									$(".modal .inf-block__idesc").velocity("stop").velocity("fadeIn", fadeinTime);
    								});
    								$(".modal-body").mouseleave(function () {
    									$(".modal .inf-block__idesc").velocity("stop").velocity("fadeOut", fadeoutTime);
    								});
    							}
    							if (attrs && attrs.type == "carousel") {
    								$(".modal .modal-body").mouseenter(function () {
    									$(".modal .flex-control-nav, .modal .flex-direction-nav").velocity("stop").velocity("fadeIn", fadeinTime);
    								});
    								$(".modal-body").mouseleave(function () {
    									$(".modal .flex-control-nav, .modal .flex-direction-nav").velocity("stop").velocity("fadeOut", fadeoutTime);
    								});
    							}
    						});
    					} else {
    						if (modalInstance) {
    							modalInstance.dismiss('cancel');
    							modalInstance = null;
    						}
    					};
    				}
    			});

    		}
    	}
    }])

    // Wrapper to jQuery iScroll plugin for huge tables
    // Example: <div data-table-scroll><table...
    // Used in: L4 components with tables (Market Prices, Benchmark etc)
    .directive("tableScroll", ["$timeout", function ($timeout) {
    	return {
    		restrict: 'A',
    		link: function (scope, element, attrs) {
    			element.append("<div class=\"leftShadow\">leftShadow</div>");
    			element.append("<div class=\"rightShadow\">rightShadow</div>");
    			var leftShadow = $(".leftShadow", element);
    			var rightShadow = $(".rightShadow", element);
    			var myScroll = new IScroll(element[0], {
    				scrollbars: true,
    				scrollX: true,
    				scrollY: false,
    				preventDefault: false,
    				probeType: 3
    			});

    			var setShadows = function (scroll) {
    				$timeout(function() {
    					if (scroll.hasHorizontalScroll) {
    						if (scroll.x < -10) {
    							leftShadow.show();
    						} else {
    							leftShadow.hide();
    						}
    						if (Math.abs(scroll.x) < Math.abs(scroll.maxScrollX) - 10) {
    							rightShadow.show();
    						} else {
    							rightShadow.hide();
    						}
    					} else {
    						leftShadow.hide();
    						rightShadow.hide();
    					}                          
    				}, 100);
    			}

    			myScroll.on('scroll', function () {
    				setShadows(this);
    			});

    			$(window).resize(function() {
    				setShadows(myScroll);
    			});

    			setShadows(myScroll);

    			scope.$watch(function () { return scope.$eval(attrs.refreshScroll);}, function(v) {
    				if (v) {
    					$timeout(function() {
    						myScroll.refresh();
    						setShadows(myScroll);
    					});
    				}
    			});
    		}
    	}
    }])

	.directive("marketDataTableGrid", ["$timeout", function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				data: "=marketDataTableGrid",
				sorting: "@",
				headings: "=",
				footer: "=",
				columns: "=",
				from: "@",
				to: "@"
			},
			templateUrl: "/static/partials/marketDataTableGrid.html",
			link: function ($scope, element, attrs) {
				$timeout(function () {
					$scope.descending = (attrs.descending == undefined) ? false : attrs.descending;
					var sortClass = attrs.sortClass ? attrs.sortClass : "sorting";
					var ascClass = attrs.ascClass ? attrs.ascClass : "asc";
					var descClass = attrs.desClass ? attrs.descClass : "desc";

					$scope.from = $scope.from ? parseInt($scope.from) : 0;
					$scope.to = $scope.to ? parseInt($scope.to) : 10000;

					$scope.$watch("data", function (data) {
						if (!data)
							return;
						angular.forEach(data, function (product) {
							product.filteredData = [];
							angular.forEach($scope.columns, function (col, i) {
								var filterDataData = [];
								if ($.isArray(col)) {
									angular.forEach(col, function (innerData, j) {
										if (innerData.name == "filter_groups") {
											var categories = '<div class="filter-group-categories">';
											var firstCategoryAdded = false;
											angular.forEach(product[innerData.name], function (primaryFilterGroup, k) {
												angular.forEach(primaryFilterGroup.subgroup, function (subgroup, l) {
													if (subgroup.value) {
														if (firstCategoryAdded) {
															categories += ', ';
														}
														categories += '<a href="#" class="category-link">' + subgroup.sub_category_name + '</a>';
														firstCategoryAdded = true;
													}
												});
											});
											categories += "</div>"
											filterDataData.push(categories);
										} else {
											filterDataData.push(product[innerData.name]);
										}
									});
								} else {
									filterDataData.push(product[col.name]);
								}
								product.filteredData[i] = {
									"data": filterDataData,
									"css": col.css
								}
							});
						});
						$("[data-field]", element).each(function (i, el) {
							var text = $(el).text();
							var field = $(el).data("field");
							if (field.length > 0) //if sort field is mentioned, then only add the sort icon
							{
								$(el).html("");
								$(el).append("<span>" + text + "</span>");
								var span = $("span", el);
								if (sortClass) {
									span.addClass(sortClass);
								}
								if (field == $scope.sorting) {
									$scope.descending ? span.addClass(descClass) : span.addClass(ascClass);
								}
							}

						});
						$("[data-field] span", element).click(function () {
							var span = $(this);
							$scope.sorting = span.parent("[data-field]").data("field");
							var descending = false;
							if (span.hasClass(ascClass)) {
								descending = true;
							}
							$("[data-field] span", element).removeClass(ascClass).removeClass(descClass);
							descending ? span.addClass(descClass) : span.addClass(ascClass);
							$scope.descending = descending;
							$scope.$apply();
						});
					}, true);
				});
			}
		};
	}])

    // Data grid directive
    .directive("grid", ["$timeout", function ($timeout) {
        return {
            restrict: 'A',
            scope: {
                data: "=grid",
                sorting: "@",
                headings: "=",
                footer: "=",
                columns: "=",
                from: "@",
                to: "@"
            },
            templateUrl: "/static/partials/grid.html",

            link: function ($scope, element, attrs) {
                $timeout(function() {
                    $scope.descending = (attrs.descending == undefined) ? false : attrs.descending;
                    var sortClass = attrs.sortClass ? attrs.sortClass : "sorting";
                    var ascClass = attrs.ascClass ? attrs.ascClass : "asc";
                    var descClass = attrs.desClass ? attrs.descClass : "desc";

                    $scope.from = $scope.from ? parseInt($scope.from) : 0;
                    $scope.to = $scope.to ? parseInt($scope.to) : 10000;
                    
                    $scope.$watch("data", function (data) {
                        if (!data)
                            return;
                        angular.forEach(data, function (d) {
                            d.filteredData = [];
                            angular.forEach($scope.columns, function (col, i) {
                            	d.filteredData[i] = {
                            		"data": d[col.name],
                            		"css": col.css
                            	}
                            });
                        });
                        $("[data-field]", element).each(function (i, el) {
                            var text = $(el).text();
                            var field = $(el).data("field");
                            if (field.length > 0) //if sort field is mentioned, then only add the sort icon
                            {
                                $(el).html("");
                                $(el).append("<span>" + text + "</span>");
                                var span = $("span", el);
                                if (sortClass) {
                                    span.addClass(sortClass);
                                }
                                if (field == $scope.sorting) {
                                    $scope.descending ? span.addClass(descClass) : span.addClass(ascClass);
                                }
                            }
                            
                        });
                        $("[data-field] span", element).click(function () {
                            var span = $(this);
                            $scope.sorting = span.parent("[data-field]").data("field");
                            var descending = false;
                            if (span.hasClass(ascClass)) {
                                descending = true;
                            }
                            $("[data-field] span", element).removeClass(ascClass).removeClass(descClass);
                            descending ? span.addClass(descClass) : span.addClass(ascClass);
                            $scope.descending = descending;
                            $scope.$apply();
                        });
                    }, true);
                });
            }
        }
    }])

    // Sorter directive
    .directive('sorter', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            template: function (elem) { return $(elem).html(); },
            link: function ($scope, element, attrs) {
                $scope.field = attrs.sorter;
                $scope.descending = ((attrs.descending == undefined) || (attrs.descending == "false")) ? false : attrs.descending;
                var sortClass = attrs.sortClass ? attrs.sortClass : "sorting";
                var ascClass = attrs.ascClass ? attrs.ascClass : "asc";
                var descClass = attrs.desClass ? attrs.descClass : "desc";
                $scope.$watch(function() { return attrs.items; }, function (items) {
                    if (!items || !items.length)
                        return;
                    $timeout(function () {
                        $("[data-field]", element).each(function (i, el) {
                            var text = $(el).text();
                            var field = $(el).data("field");
                            $(el).html("");
                            $(el).append("<span>" + text + "</span>");
                            var span = $("span", el);
                            if (sortClass) {
                                span.addClass(sortClass);
                            }
                            if (field == $scope.field) {
                                $scope.descending ? span.addClass(descClass) : span.addClass(ascClass);
                            }
                        });
                        $("[data-field] span", element).click(function () {
                            var span = $(this);
                            $scope.field = span.parent("[data-field]").data("field");
                            var descending = false;
                            if (span.hasClass(ascClass)) {
                                descending = true;
                            }
                            $("[data-field] span", element).removeClass(ascClass).removeClass(descClass);
                            descending ? span.addClass(descClass) : span.addClass(ascClass);
                            $scope.descending = descending;
                            $scope.$apply();
                        });
                    });
                });
            }
        };
    }])

    // Format numbers (used in the data grid cells)
    .filter("num", ["$filter", function ($filter) {
        return function (input) {
            if (typeof input == "string")
                return input;
            function decimalPlaces(num) {
                var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                if (!match) { return 0; }
                return Math.max(
                     0,
                     // Number of digits right of decimal point.
                     (match[1] ? match[1].length : 0)
                     // Adjust for scientific notation.
                     - (match[2] ? +match[2] : 0));
            }
            var fractions = decimalPlaces(input);
            return $filter("number")(input, fractions).replace(/,/g, " ");
        };
    }])

    // Custom order for the tables exclusive of empty cells (empty cells are always at the bottom when column is ordered)
    .filter('orderWithEmptyCells', function () {
        return function (arr, field, reverse) {
            var numbers = [];
            var strings = [];
            angular.forEach(arr, function (item) {
                if (!isNaN(item[field]) && (typeof item[field] == 'number')) {
                    numbers.push(item);
                }
                else
                    strings.push(item);
            });
            var sign = reverse ? -1 : 1;
            return numbers.sort(function (a, b) {
                return sign * (a[field] - b[field]);
            }).concat(strings.sort(function (a, b) {
                if (typeof a[field] != "string")
                    return sign;
                return sign * (a[field].localeCompare(b[field]));
            }));
        };
    });