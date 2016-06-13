var $ = require('jquery');
var handlebars = require('handlebars');
var _ = require('underscore');


// have to use the token in the header

var githubtoken = require('./git-hub.apikey.js');

if(githubtoken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken.token
    }
  });
}


var profileUrl = 'https://api.github.com/users/kirby-munson';

  $.ajax(profileUrl).done(function(data){
    var source = $('#profile-thumbnail-template').html();
    var template = handlebars.compile(source);
    var renderTemplate = template(data);
    $('.git-thumbnail-profile').append(renderTemplate);

    });

    $.ajax(profileUrl).done(function(data){
      var source = $('#profile-pic-template').html();
      var template = handlebars.compile(source);
      var renderTemplate = template(data);
      $('.profile-pic').append(renderTemplate);

      });

      $.ajax(profileUrl).done(function(data){
        var source = $('#profile-location-template').html();
        var template = handlebars.compile(source);
        var renderTemplate = template(data);
        $('.profile-location').append(renderTemplate);

        });


      $.ajax(profileUrl).done(function(data){
        var source = $('#profile-name-template').html();
        var template = handlebars.compile(source);
        var renderTemplate = template(data);
        $('.profile-name').append(renderTemplate);

        });

        $.ajax(profileUrl).done(function(data){
          var source = $('#profile-username-template').html();
          var template = handlebars.compile(source);
          var renderTemplate = template(data);
          $('.profile-username').append(renderTemplate);

          });

          $.ajax(profileUrl).done(function(data){
            var source = $('#profile-email-template').html();
            var template = handlebars.compile(source);
            var renderTemplate = template(data);
            $('.profile-email').append(renderTemplate);

            });

            $.ajax(profileUrl).done(function(data){
              var source = $('#profile-website-template').html();
              var template = handlebars.compile(source);
              var renderTemplate = template(data);
              $('.profile-blog').append(renderTemplate);

              });




              $.ajax(profileUrl).done(function(data){
                var source = $('#profile-joined-template').html();
                var template = handlebars.compile(source);
                var renderTemplate = template(data);
                $('.profile-joined').append(renderTemplate);
                });

//                 function dateFormatChange(){
//                                 var newdate = new Date(data.created_at);
//                                 var day = newdate.getDay();
//                                 var month = newdate.getUTCMonth();
//                                 var monthNames = ["January", "February", "March", "April", "May", "June",
//                                   "July", "August", "September", "October", "November", "December"
//                                 ];
//                                 var year = newdate.getFullYear();
//                                 newdate = monthNames[newdate.getMonth()] + ' ' + day + ' '  + year;
//                                 return newdate;
//                               }
//                                 dateFormatChange();
// //
// //
//
//
//
//
                $.ajax(profileUrl).done(function(data){
                  var source = $('#profile-followers-template').html();
                  var template = handlebars.compile(source);
                  var renderTemplate = template(data);
                  $('.followers').append(renderTemplate);

                  });

                  $.ajax(profileUrl).done(function(data){
                    var source = $('#profile-following-template').html();
                    var template = handlebars.compile(source);
                    var renderTemplate = template(data);
                    $('.following').append(renderTemplate);

                    });

                    $.ajax(profileUrl).done(function(data){
                      var source = $('#profile-starred-template').html();
                      var template = handlebars.compile(source);
                      var renderTemplate = template(data);
                      $('.starred').append(renderTemplate);

                      });

                      $.ajax(profileUrl).done(function(data){
                        var source = $('#profile-organizations-template').html();
                        var template = handlebars.compile(source);
                        var renderTemplate = template(data);
                        $('.organizations').append(renderTemplate);

                        });



                            var repoUrl = profileUrl + '/repos';
                                $.ajax(repoUrl).done(function(repos){
                                   _.each(repos, function(data){
                                  var source = $('#repo-template').html();
                                  var template = handlebars.compile(source);
                                  var context = {'data': data};
                                  var renderTemplate = template(context);
                                  $('.tab-pane').append(renderTemplate);
                              });
                                });







                        // // _.each(data, function(data){
                        // $.ajax(repoUrl).done(function(data){
                        //   var source = $('#repo-template').html();
                        //   var template = handlebars.compile(source);
                        //   var renderTemplate = template(data);
                        //   $('.tab-pane active').append(renderTemplate);
                        //
                        //   });




//
//
// // $('#profile a').click(function (e) {
// //   e.preventDefault()
// //   $(this).tab('show')
// // })
// //
// // $('#home a[href="#profile"]').tab('show') // Select tab by name
// // $('#profile a:first').tab('show') // Select first tab
// // $('#myTabs a:last').tab('show') // Select last tab
// // $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
//
//
// // var repo = profileUrl + '/repos';
// //   $.ajax(repo).done(function(data){
// //     _.each(data, function(data){
// //
// //     })
// //   })
//
//
//
// // function displayProfile(things){
// // _.each(things, function(things){
// // var source = $('#profile-template').html();
// // var template = handlebars.compile(source);
// // var renderTemplate = template(things);
// // $('.container').append(renderTemplate);
// // });
// // }
//
// // function displayPlanet(planet){
// //   var html = template(planet);
// //   $('.js-planet-list').append(html);
// //
// //   $.ajax(planet.url).done(function(planetDetails){
// //     $('#' + planetDetails.name).append('<span> ::' + planetDetails.climate + '</span>')
// //   });
// // }
//
//
//
//
// // need a url
// // domain name (base url) and the resource info (what comes after the slashes)
//
//
// // var baseUrl = 'http://swapi.co/api/';
// // var planetListItemTemplate = $('#planet-list-item-template').html();
// // var template = handlebars.compile(planetListItemTemplate);
//
//
// // register event handler on the button - want the ajax request to run when you click the button and how what the climate is
//
// // $('.js-planets-button').click(function(event){
// //   event.preventDefault();
// //
// //
// // fetchPlanets();
// // });
//
//
// // run ajax request to get planets from the api
//
// // function fetchPlanets(){
// //   var planetsUrl = baseUrl + 'planets/';
// //
// //
// //   $.ajax(planetsUrl).done(function(planetList){
// //     planetList.results.forEach(function(planet){
// //
// //       displayPlanet(planet);
// //     });
// //   });
// // }
//
// // ajax sends back a promise --- at state 1. we want state 4, when it's finsihed. we need to use our promise and put
// // methods on it. done is called when the network request is complete
//
//
// // put my planets in a list of li's with handlebar template

//
// function displayPlanet(planet){
//   var html = template(planet);
//   $('.js-planet-list').append(html);
//
//   $.ajax(planet.url).done(function(planetDetails){
//     $('#' + planetDetails.name).append('<span> ::' + planetDetails.climate + '</span>')
//   });
// }
