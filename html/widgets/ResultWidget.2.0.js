(function ($) {

AjaxSolr.ResultWidget = AjaxSolr.AbstractWidget.extend({
  afterRequest: function () {
    $(this.target).empty();
    for (var i = 0, l = this.manager.response.response.docs.length; i < l; i++) {
      var doc = this.manager.response.response.docs[i];
      $(this.target).append(this.template(doc));
    }
  },

  template: function (doc) {
    var snippet = '';
    if (doc.subject.length > 300) {
      snippet += doc.subject+ ' ' + doc.content.substring(0, 300);
      snippet += '<span style="display:none;">' + doc.content.substring(300);
      snippet += '</span> <a href="#" class="more">more</a>';
    }
    else {
      if(doc.content && doc.container)
      {
        snippet +='Contains: ' + doc.content + ' Stored in: ' + doc.container;
      }
      if(doc.location && doc.label)
      {
        snippet +='Label: ' + doc.label + ' Stored in: ' + doc.location;
      }
      else{
        snippet += ' Stored in: ' + doc.location;
      }

    }

    if(doc.url){
      var image = doc.url;

    }

    var output = '<div><h2>' + doc.subject + '</h2>';
    if(doc.url){output += ' <img class="drawing" src="' + doc.url + '"alt="drawing not found">';}
    output += '<p>' + snippet + '</p></div>';
    return output;
  }
});

})(jQuery);