'use strict';

/**
 * @ngdoc function
 * @name tonygApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tonygApp
 */
angular.module('tonygApp')
  .controller('MainCtrl', function ($scope, $animate) {

  	$scope.test = '../../images/logo.png';
  	$animate.enabled(true); 

    $scope.images = ["images/portfolio/bcc_rack_brochure.png", 
                      "images/portfolio/bellflower_1.png",
                      "images/portfolio/bellflower_2.png",
                      "images/portfolio/bellflower_3.png",
                      "images/portfolio/coh_centenial_book.png",
                      "images/portfolio/coh_dinner_invite.png",
                      "images/portfolio/coh_hem_brochure.png",
                      "images/portfolio/coh_hemmal_brochure.png",
                      "images/portfolio/coh_kwak-postcard.png",
                      "images/portfolio/cw_chilipepper_pstcd.png",
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
                      "images/portfolio/et_menu.png",
                      "images/portfolio/et_shrimp_ad.png",
                      "images/portfolio/et_sunset_ad.png",
                      "images/portfolio/et_tablecard_1.png",
                      "images/portfolio/et_tablecard_3.png",
                      "images/portfolio/et_tablecard-2.png",
                      "images/portfolio/hamms_bank_ad.png",
                      "images/portfolio/mhl_pos_guide_1.png",
                      "images/portfolio/mhl_pos_guide_2.png",
                      "images/portfolio/mhl_pos_guide_3.png",
                      "images/portfolio/red_rocket_ad_1.png",
                      "images/portfolio/red_rocket_ad_2.png",
                      "images/portfolio/suzuki_outdoor.png",
                      "images/portfolio/tahiti_ad.png",
                      "images/portfolio/TF_DegreesofLove.png",
                      "images/portfolio/TF_HowdoIlovethee.png",
                      "images/portfolio/tf_mday-postcard.png",
                      "images/portfolio/TF_Takeherbreathaway.png",
                      "images/portfolio/TF_TexasfloristAd.png",
                      "images/portfolio/TF_XMASposter.png",
                      "images/portfolio/wf_ad_1.png",
                      "images/portfolio/wf_ad_2.png",
                      "images/portfolio/wf_poster_1.png",
                      "images/portfolio/wf_poster_2.png",
                      "images/portfolio/wf_poster_3.png",
                      "images/portfolio/wf_poster_4.png",
                      "images/portfolio/wp_dm_letter.png"
                      ]
    	


  });
