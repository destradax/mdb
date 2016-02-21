mdb.directive('fileReader', function() {
	return {
		scope: {
			fileReader:"="
		},
		link: function(scope, element) {
			element.on('change', function(changeEvent) {
				var files = changeEvent.target.files;
				if (files.length) {
					var fr = new FileReader();
					fr.onload = function(loadEvent) {
							var contents = loadEvent.target.result;
							scope.$apply(function () {
								scope.fileReader = contents;
							});
					};

					fr.readAsDataURL(files[0]);
				}
			});
		}
	};
});
