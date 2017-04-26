angular.module("app", [
            "commonModule",
            "innerModule",
            "ui.bootstrap",
            "angular-bootstrap-select",
            "angular-bootstrap-select.extra",
            "youtube-embed"
        ])

        .controller("app-ctrl", ["$scope", "mainFactory", function($scope, mf) {
            $scope.hoveringOver = function(value) {
                $scope.overStar = value;
                $scope.percent = 100 * (value / $scope.max);
            };

            $scope.contactFormSubmit = function(scope) {
                scope.modalForm = false;
                scope.modalSuccess = true;
            };

            $scope.docsDownload = function($event) {
                $event.stopPropagation();
            };

            $scope.share = mf.addThisShare;

            $scope.screenMode = function () {
                return mf.screenMode();
            }
        }
    ]);
