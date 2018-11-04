$(function () {
  var load = function (url) {
      $.get(url).done(function (data) {
          $("#content").load("data #content");
      })
  };

  $(document).on('click', 'a', function (e) {
      e.preventDefault();

      var $this = $(this),
          url = $this.attr("href"),
          title = $this.attr("title");

      history.pushState({
          url: url,
          title: title
      }, title, url);

      document.title = title;

      load(url);
  });

  $(window).on('popstate', function (e) {
      var state = e.originalEvent.state;
      if (state !== null) {
          document.title = state.title;
          load(state.url);
      } else {
          document.title = 'Home';
          $("#content").empty();
      }
  });
});
