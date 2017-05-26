$(document).ready(function(){
  $('form#new-package').submit(function(event){
    event.preventDefault();

    var inputtedLength = parseInt($("input#new-package-length").val());
    var inputtedWidth = parseInt($("input#new-package-width").val());
    var inputtedHeight = parseInt($("input#new-package-height").val());
    var inputtedWeight = parseInt($("input#new-package-weight").val());
    var newPackage = { length: inputtedLength, width: inputtedWidth,
                      weight: inputtedWeight, height: inputtedHeight,
                      price: function() {
                        return this.length + this.width + this.height * this.weight;
                      },
                      draw: function(){
                        return "<svg width='"
                        + (this.width * 10)
                        + "' height='"
                        + (this.height * 10)
                        + "'><rect width='"
                        + (this.width * 10)
                        + "' height='"
                        + (this.height * 10)
                        + "'style='fill:rgb(164,124,72);stroke-width:3;stroke:rgb(0,0,0)'/></svg>"
                      }
                      };

    $("input#new-package-length").val("");
    $("input#new-package-width").val("");
    $("input#new-package-height").val("");
    $("input#new-package-weight").val("");

    $("#show-price").show();
    $(".price").text(newPackage.price());
    $(".length").text(newPackage.length);
    $(".width").text(newPackage.width);
    $(".height").text(newPackage.height);
    $(".weight").text(newPackage.weight);
    $(".draw").empty();
    $(".draw").append(newPackage.draw());
  });
});
