'use strict';

/**
 * @ngdoc function
 * @name tonygApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tonygApp
 */
angular.module('tonygApp')
  .controller('MainCtrl', function ($scope, $animate, Lightbox) {

    $('#carousel-portfolio').carousel();

    $scope.images = [
                      "images/portfolio/bcc_donate.png", 
                      "images/portfolio/bcc_logo.png", 
                      "images/portfolio/bcc_rack_brochure.png", 
                      "images/portfolio/bellflower_1.png", 
                      "images/portfolio/bellflower_2.png", 
                      "images/portfolio/bellflower_3.png", 
                      "images/portfolio/coh_centenial_book.png",
                      "images/portfolio/coh_dinner_invite.png",
                      "images/portfolio/coh_hem_brochure.png",
                      "images/portfolio/coh_hemmal_brochure-cover.png",
                      "images/portfolio/coh_hemmal_brochure-inside.png",
                      "images/portfolio/coh_kwak-postcard.png",
                      "images/portfolio/coh_physical-cover.png",
                      "images/portfolio/coh_physical-inside.png",
                      "images/portfolio/cw_bpd-email1.png",
                      "images/portfolio/cw_bpd-email2.png",
                      "images/portfolio/cw_bpd-letter.png",
                      "images/portfolio/cw_bpd-postcard.png",
                      "images/portfolio/cw_idtheft_1.png",
                      "images/portfolio/cw_idtheft_2.png",
                      "images/portfolio/cw_idtheft_3.png",
                      "images/portfolio/cw_idtheft_4.png",
                      "images/portfolio/cw_recruitment_1.png",
                      "images/portfolio/cw_recruitment_2.png",
                      "images/portfolio/cw_recruitment_3.png",
                      "images/portfolio/cw_trade_ad_1.png",
                      "images/portfolio/cw_trade_ad_2.png",
                      "images/portfolio/cw_trade_ad_3.png",
                      "images/portfolio/di_stargaze_ad.png",
                      "images/portfolio/di_stars_ad.png",
                      "images/portfolio/et_angels_ad_1.png",
                      "images/portfolio/et_angels_ad_2.png",
                      "images/portfolio/et_angels_ad_3.png",
                      "images/portfolio/et_angels_ad_4.png",
                      "images/portfolio/et_angels_insert_1.png",
                      "images/portfolio/et_angels_insert_2.png",
                      "images/portfolio/et_bullpen_banner.png",
                      "images/portfolio/et_fajita_banner.png",
                      "images/portfolio/et_menu-cover.png",
                      "images/portfolio/et_menu-inside.png",
                      "images/portfolio/et_shrimp_ad.png",
                      "images/portfolio/et_sunset_ad.png",
                      "images/portfolio/et_tablecard_1.png",
                      "images/portfolio/et_tablecard_2.png",
                      "images/portfolio/et_tablecard_3.png",
                      "images/portfolio/hamms_bank_ad.png",
                      "images/portfolio/mhl_pos_guide_1.png",
                      "images/portfolio/mhl_pos_guide_2.png",
                      "images/portfolio/mhl_pos_guide_3.png",
                      "images/portfolio/red_rocket_ad_1.png",
                      "images/portfolio/red_rocket_ad_2.png",
                      "images/portfolio/suzuki_outdoor.png",
                      "images/portfolio/tahiti_ad.png",
                      "images/portfolio/tf_degreesoflove.png",
                      "images/portfolio/tf_easter_email.1.png",
                      "images/portfolio/tf_easter_email.2.png",
                      "images/portfolio/tf_easter_email.3.png",
                      "images/portfolio/tf_howdoIlovethee.png",
                      "images/portfolio/tf_mday-postcard.png",
                      "images/portfolio/tf_snoopy.gif",
                      "images/portfolio/tf_takeherbreathaway.png",
                      "images/portfolio/tf_texasflorist-ad.png",
                      "images/portfolio/tf_thanks.gif",
                      "images/portfolio/tf_vday_email.1.png",
                      "images/portfolio/tf_xmas-poster.png",
                      "images/portfolio/wf_ad_1.png",
                      "images/portfolio/wf_ad_2.png",
                      "images/portfolio/wf_poster_1.png",
                      "images/portfolio/wf_poster_2.png",
                      "images/portfolio/wf_poster_3.png",
                      "images/portfolio/wf_poster_4.png",
                      "images/portfolio/wp_dm_letter.png",
                      "images/portfolio/bcc_banners.png",
                      ]

                      $scope.imagesLightbox = [
                        {url:"images/portfolio-lb/bcc_donate.png",
                         caption:"Online Banner Ad"}, 
                        {url:"images/portfolio-lb/bcc_logo.png",
                         caption:"Logo Design"}, 
                        {url:"images/portfolio-lb/bcc_rack_brochure.png",
                         caption:"Brochure"}, 
                        {url:"images/portfolio-lb/bellflower_1.png",
                         caption:"Outdoor Board"}, 
                        {url:"images/portfolio-lb/bellflower_2.png",
                         caption:"Outdoor Board"}, 
                        {url:"images/portfolio-lb/bellflower_3.png",
                         caption:"Outdoor Board"}, 
                        {url:"images/portfolio-lb/coh_centenial_book.png",
                         caption:"Lobby Book"},
                        {url:"images/portfolio-lb/coh_dinner_invite.png",
                         caption:"Self-Mailer/Invitation (B-2-B)"},
                        {url:"images/portfolio-lb/coh_hem_brochure.png",
                         caption:"Self-Mailer/Invitation (B-2-B)"},
                        {url:"images/portfolio-lb/coh_hemmal_brochure-cover.png",
                         caption:"Self-Mailer/Invitation (B-2-B)"},
                        {url:"images/portfolio-lb/coh_hemmal_brochure-inside.png",
                         caption:"Brochure Interior"},
                        {url:"images/portfolio-lb/coh_kwak-postcard.png",
                         caption:"Postcard (B-2-B)"},
                        {url:"images/portfolio-lb/coh_physical-cover.png",
                         caption:"Newsletter (B-2-B)"},
                        {url:"images/portfolio-lb/coh_physical-inside.png",
                         caption:"Newsletter Interior"},
                        {url:"images/portfolio-lb/cw_bpd-email1.png",
                         caption:"Email #1 (B-2-B)"},
                        {url:"images/portfolio-lb/cw_bpd-email2.png",
                         caption:"Email #2 (B-2-B)"},
                        {url:"images/portfolio-lb/cw_bpd-letter.png",
                         caption:"Direct Mail Letter #1 (B-2-B)"},
                        {url:"images/portfolio-lb/cw_bpd-postcard.png",
                         caption:"Postcard (B-2-B)"},
                        {url:"images/portfolio-lb/cw_idtheft_1.png",
                         caption:"Brochure (B-2-C)"},
                        {url:"images/portfolio-lb/cw_idtheft_2.png",
                         caption:"Brochure Interior"},
                        {url:"images/portfolio-lb/cw_idtheft_3.png",
                         caption:"Brochure Interior"},
                        {url:"images/portfolio-lb/cw_idtheft_4.png",
                         caption:"Brochure Interior"},
                        {url:"images/portfolio-lb/cw_recruitment_1.png",
                         caption:"Recruitment Brochure"},
                        {url:"images/portfolio-lb/cw_recruitment_2.png",
                         caption:"Brochure Interior"},
                        {url:"images/portfolio-lb/cw_recruitment_3.png",
                         caption:"Brochure Interior"},
                        {url:"images/portfolio-lb/cw_trade_ad_1.png",
                         caption:"Print Ad #1 (B-2-B)"},
                        {url:"images/portfolio-lb/cw_trade_ad_2.png",
                         caption:"Print Ad #2 (B-2-B)"},
                        {url:"images/portfolio-lb/cw_trade_ad_3.png",
                         caption:"Print Ad #3 (B-2-B)"},
                        {url:"images/portfolio-lb/di_stargaze_ad.png",
                         caption:"Print Ad #1 (B-2-B)"},
                        {url:"images/portfolio-lb/di_stars_ad.png",
                         caption:"Print Ad #2 (B-2-B)"},
                        {url:"images/portfolio-lb/et_angels_ad_1.png",
                         caption:"Angels’ Program Book Ad #1"},
                        {url:"images/portfolio-lb/et_angels_ad_2.png",
                         caption:"Angels’ Program Book Ad #2"},
                        {url:"images/portfolio-lb/et_angels_ad_3.png",
                         caption:"Angels’ Program Book Ad #3"},
                        {url:"images/portfolio-lb/et_angels_ad_4.png",
                         caption:"Newspaper Ad"},
                        {url:"images/portfolio-lb/et_angels_insert_1.png",
                         caption:"Direct Mail Package #1"},
                        {url:"images/portfolio-lb/et_angels_insert_2.png",
                         caption:"Direct Mail Package #2"},
                        {url:"images/portfolio-lb/et_bullpen_banner.png",
                         caption:"Stadium Signage"},
                        {url:"images/portfolio-lb/et_fajita_banner.png",
                         caption:"In-Store Collateral"},
                        {url:"images/portfolio-lb/et_menu-cover.png",
                         caption:"Menu Cover"},
                        {url:"images/portfolio-lb/et_menu-inside.png",
                         caption:"Menu Interior"},
                        {url:"images/portfolio-lb/et_shrimp_ad.png",
                         caption:"Print Ad #1"},
                        {url:"images/portfolio-lb/et_sunset_ad.png",
                         caption:"Print Ad #2"},
                        {url:"images/portfolio-lb/et_tablecard_1.png",
                         caption:"Table Card"},
                        {url:"images/portfolio-lb/et_tablecard_2.png",
                         caption:"Table Card"},
                        {url:"images/portfolio-lb/et_tablecard_3.png",
                         caption:"Table Card"},
                        {url:"images/portfolio-lb/hamms_bank_ad.png",
                         caption:"Chicago Bulls’ Program Ad"},
                        {url:"images/portfolio-lb/mhl_pos_guide_1.png",
                         caption:"Bottle Neck Dangler Brochure"},
                        {url:"images/portfolio-lb/mhl_pos_guide_2.png",
                         caption:"Bottle Neck Dangler Brochure"},
                        {url:"images/portfolio-lb/mhl_pos_guide_3.png",
                         caption:"Bottle Neck Dangler Brochure"},
                        {url:"images/portfolio-lb/red_rocket_ad_1.png",
                         caption:"Print Ad #1"},
                        {url:"images/portfolio-lb/red_rocket_ad_2.png",
                         caption:"Print Ad #2"},
                        {url:"images/portfolio-lb/suzuki_outdoor.png",
                         caption:"Outdoor Board"},
                        {url:"images/portfolio-lb/tahiti_ad.png",
                         caption:"Print Ad"},
                        {url:"images/portfolio-lb/tf_degreesoflove.png",
                         caption:"Florist Shop Poster"},
                        {url:"images/portfolio-lb/tf_easter_email.1.png",
                         caption:"Florist Email"},
                        {url:"images/portfolio-lb/tf_easter_email.2.png",
                         caption:"Florist Email"},
                        {url:"images/portfolio-lb/tf_easter_email.3.png",
                         caption:"Florist Email"},
                        {url:"images/portfolio-lb/tf_howdoIlovethee.png",
                         caption:"Florist Shop Poster"},
                        {url:"images/portfolio-lb/tf_mday-postcard.png",
                         caption:"Postcard (B-2-B)"},
                        {url:"images/portfolio-lb/tf_snoopy.gif",
                         caption: "Online Banner Ad"},
                        {url:"images/portfolio-lb/tf_takeherbreathaway.png",
                         caption:"Florist Shop Poster"},
                        {url:"images/portfolio-lb/tf_texasflorist-ad.png",
                         caption:"Print Ad (B-2-B)"},
                        {url:"images/portfolio-lb/tf_thanks.gif",
                         caption: "Online Banner Ad"},
                        {url:"images/portfolio-lb/tf_vday_email.1.png",
                         caption:"Florist Email"},
                        {url:"images/portfolio-lb/tf_xmas-poster.png",
                         caption:"Florist Shop Poster"},
                        {url:"images/portfolio-lb/wf_ad_1.png",
                         caption:"In-Branch Counter Card"},
                        {url:"images/portfolio-lb/wf_ad_2.png",
                         caption:"In-Branch Counter Card"},
                        {url:"images/portfolio-lb/wf_poster_1.png",
                         caption:"In-Store Poster #1"},
                        {url:"images/portfolio-lb/wf_poster_2.png",
                         caption:"In-Store Poster #2"},
                        {url:"images/portfolio-lb/wf_poster_3.png",
                         caption:"In-Store Poster #3"},
                        {url:"images/portfolio-lb/wf_poster_4.png",
                         caption:"In-Branch Counter Card"},
                        {url:"images/portfolio-lb/wp_dm_letter.png",
                         caption:"Direct Mail Package (B-2-C)"},
                        {url:"images/portfolio-lb/bcc_banners.png",
                          caption: "Trade Show Banners"}
                      ]

                      $scope.imagesLightboxFirstIncluded = [ 

                      {url:"images/portfolio-lb/bcc_banners.png",
                       caption: "Trade Show Banners"},
                      {url:"images/portfolio-lb/bcc_donate.png",
                       caption:"Online Banner Ad"}, 
                      {url:"images/portfolio-lb/bcc_logo.png",
                       caption:"Logo Design"}, 
                      {url:"images/portfolio-lb/bcc_rack_brochure.png",
                       caption:"Brochure"}, 
                      {url:"images/portfolio-lb/bellflower_1.png",
                       caption:"Outdoor Board"}, 
                      {url:"images/portfolio-lb/bellflower_2.png",
                       caption:"Outdoor Board"}, 
                      {url:"images/portfolio-lb/bellflower_3.png",
                       caption:"Outdoor Board"}, 
                      {url:"images/portfolio-lb/coh_centenial_book.png",
                       caption:"Lobby Book"},
                      {url:"images/portfolio-lb/coh_dinner_invite.png",
                       caption:"Self-Mailer/Invitation (B-2-B)"},
                      {url:"images/portfolio-lb/coh_hem_brochure.png",
                       caption:"Self-Mailer/Invitation (B-2-B)"},
                      {url:"images/portfolio-lb/coh_hemmal_brochure-cover.png",
                       caption:"Self-Mailer/Invitation (B-2-B)"},
                      {url:"images/portfolio-lb/coh_hemmal_brochure-inside.png",
                       caption:"Brochure Interior"},
                      {url:"images/portfolio-lb/coh_kwak-postcard.png",
                       caption:"Postcard (B-2-B)"},
                      {url:"images/portfolio-lb/coh_physical-cover.png",
                       caption:"Newsletter (B-2-B)"},
                      {url:"images/portfolio-lb/coh_physical-inside.png",
                       caption:"Newsletter Interior"},
                      {url:"images/portfolio-lb/cw_bpd-email1.png",
                       caption:"Email #1 (B-2-B)"},
                      {url:"images/portfolio-lb/cw_bpd-email2.png",
                       caption:"Email #2 (B-2-B)"},
                      {url:"images/portfolio-lb/cw_bpd-letter.png",
                       caption:"Direct Mail Letter #1 (B-2-B)"},
                      {url:"images/portfolio-lb/cw_bpd-postcard.png",
                       caption:"Postcard (B-2-B)"},
                      {url:"images/portfolio-lb/cw_idtheft_1.png",
                       caption:"Brochure (B-2-C)"},
                      {url:"images/portfolio-lb/cw_idtheft_2.png",
                       caption:"Brochure Interior"},
                      {url:"images/portfolio-lb/cw_idtheft_3.png",
                       caption:"Brochure Interior"},
                      {url:"images/portfolio-lb/cw_idtheft_4.png",
                       caption:"Brochure Interior"},
                      {url:"images/portfolio-lb/cw_recruitment_1.png",
                       caption:"Recruitment Brochure"},
                      {url:"images/portfolio-lb/cw_recruitment_2.png",
                       caption:"Brochure Interior"},
                      {url:"images/portfolio-lb/cw_recruitment_3.png",
                       caption:"Brochure Interior"},
                      {url:"images/portfolio-lb/cw_trade_ad_1.png",
                       caption:"Print Ad #1 (B-2-B)"},
                      {url:"images/portfolio-lb/cw_trade_ad_2.png",
                       caption:"Print Ad #2 (B-2-B)"},
                      {url:"images/portfolio-lb/cw_trade_ad_3.png",
                       caption:"Print Ad #3 (B-2-B)"},
                      {url:"images/portfolio-lb/di_stargaze_ad.png",
                       caption:"Print Ad #1 (B-2-B)"},
                      {url:"images/portfolio-lb/di_stars_ad.png",
                       caption:"Print Ad #2 (B-2-B)"},
                      {url:"images/portfolio-lb/et_angels_ad_1.png",
                       caption:"Angels’ Program Book Ad #1"},
                      {url:"images/portfolio-lb/et_angels_ad_2.png",
                       caption:"Angels’ Program Book Ad #2"},
                      {url:"images/portfolio-lb/et_angels_ad_3.png",
                       caption:"Angels’ Program Book Ad #3"},
                      {url:"images/portfolio-lb/et_angels_ad_4.png",
                       caption:"Newspaper Ad"},
                      {url:"images/portfolio-lb/et_angels_insert_1.png",
                       caption:"Direct Mail Package #1"},
                      {url:"images/portfolio-lb/et_angels_insert_2.png",
                       caption:"Direct Mail Package #2"},
                      {url:"images/portfolio-lb/et_bullpen_banner.png",
                       caption:"Stadium Signage"},
                      {url:"images/portfolio-lb/et_fajita_banner.png",
                       caption:"In-Store Collateral"},
                      {url:"images/portfolio-lb/et_menu-cover.png",
                       caption:"Menu Cover"},
                      {url:"images/portfolio-lb/et_menu-inside.png",
                       caption:"Menu Interior"},
                      {url:"images/portfolio-lb/et_shrimp_ad.png",
                       caption:"Print Ad #1"},
                      {url:"images/portfolio-lb/et_sunset_ad.png",
                       caption:"Print Ad #2"},
                      {url:"images/portfolio-lb/et_tablecard_1.png",
                       caption:"Table Card"},
                      {url:"images/portfolio-lb/et_tablecard_2.png",
                       caption:"Table Card"},
                      {url:"images/portfolio-lb/et_tablecard_3.png",
                       caption:"Table Card"},
                      {url:"images/portfolio-lb/hamms_bank_ad.png",
                       caption:"Chicago Bulls’ Program Ad"},
                      {url:"images/portfolio-lb/mhl_pos_guide_1.png",
                       caption:"Bottle Neck Dangler Brochure"},
                      {url:"images/portfolio-lb/mhl_pos_guide_2.png",
                       caption:"Bottle Neck Dangler Brochure"},
                      {url:"images/portfolio-lb/mhl_pos_guide_3.png",
                       caption:"Bottle Neck Dangler Brochure"},
                      {url:"images/portfolio-lb/red_rocket_ad_1.png",
                       caption:"Print Ad #1"},
                      {url:"images/portfolio-lb/red_rocket_ad_2.png",
                       caption:"Print Ad #2"},
                      {url:"images/portfolio-lb/suzuki_outdoor.png",
                       caption:"Outdoor Board"},
                      {url:"images/portfolio-lb/tahiti_ad.png",
                       caption:"Print Ad"},
                      {url:"images/portfolio-lb/tf_degreesoflove.png",
                       caption:"Florist Shop Poster"},
                      {url:"images/portfolio-lb/tf_easter_email.1.png",
                       caption:"Florist Email"},
                      {url:"images/portfolio-lb/tf_easter_email.2.png",
                       caption:"Florist Email"},
                      {url:"images/portfolio-lb/tf_easter_email.3.png",
                       caption:"Florist Email"},
                      {url:"images/portfolio-lb/tf_howdoIlovethee.png",
                       caption:"Florist Shop Poster"},
                      {url:"images/portfolio-lb/tf_mday-postcard.png",
                       caption:"Postcard (B-2-B)"},
                      {url:"images/portfolio-lb/tf_snoopy.gif",
                       caption: "Online Banner Ad"},
                      {url:"images/portfolio-lb/tf_takeherbreathaway.png",
                       caption:"Florist Shop Poster"},
                      {url:"images/portfolio-lb/tf_texasflorist-ad.png",
                       caption:"Print Ad (B-2-B)"},
                      {url:"images/portfolio-lb/tf_thanks.gif",
                       caption: "Online Banner Ad"},
                      {url:"images/portfolio-lb/tf_vday_email.1.png",
                       caption:"Florist Email"},
                      {url:"images/portfolio-lb/tf_xmas-poster.png",
                       caption:"Florist Shop Poster"},
                      {url:"images/portfolio-lb/wf_ad_1.png",
                       caption:"In-Branch Counter Card"},
                      {url:"images/portfolio-lb/wf_ad_2.png",
                       caption:"In-Branch Counter Card"},
                      {url:"images/portfolio-lb/wf_poster_1.png",
                       caption:"In-Store Poster #1"},
                      {url:"images/portfolio-lb/wf_poster_2.png",
                       caption:"In-Store Poster #2"},
                      {url:"images/portfolio-lb/wf_poster_3.png",
                       caption:"In-Store Poster #3"},
                      {url:"images/portfolio-lb/wf_poster_4.png",
                       caption:"In-Branch Counter Card"},
                      {url:"images/portfolio-lb/wp_dm_letter.png",
                       caption:"Direct Mail Package (B-2-C)"},
                      ]
                  


                      $scope.openLightboxModal = function (index) {
                         Lightbox.openModal($scope.imagesLightbox, index);
                       };

                      $scope.openFirstIncludedLightboxModal = function (index) {
                         Lightbox.openModal($scope.imagesLightboxFirstIncluded, index);
                       };
      
    	


  });
