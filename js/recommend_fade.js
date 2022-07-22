$(document).ready(function () {
    $('.rc1').addClass('reco_blue');
    $('#reco2').hide();
    $('#reco3').hide();
    $('#reco4').hide();
    $('#reco5').hide();
    $('#reco6').hide();

    $('.rc1').click(function () {
        $('.rc1').addClass('reco_blue');
        $('.rc2').removeClass('reco_blue');
        $('.rc3').removeClass('reco_blue');
        $('.rc4').removeClass('reco_blue');
        $('.rc5').removeClass('reco_blue');
        $('.rc6').removeClass('reco_blue');
        $('#reco1').fadeIn(1000);
        $('#reco2').hide();
        $('#reco3').hide();
        $('#reco4').hide();
        $('#reco5').hide();
        $('#reco6').hide();
    });

    $('.rc2').click(function () {
        $('.rc2').addClass('reco_blue');
        $('.rc1').removeClass('reco_blue');
        $('.rc3').removeClass('reco_blue');
        $('.rc4').removeClass('reco_blue');
        $('.rc5').removeClass('reco_blue');
        $('.rc6').removeClass('reco_blue');
        $('#reco2').fadeIn(1000);
        $('#reco1').hide();
        $('#reco3').hide();
        $('#reco4').hide();
        $('#reco5').hide();
        $('#reco6').hide();
    });

    $('.rc3').click(function () {
        $('.rc3').addClass('reco_blue');
        $('.rc1').removeClass('reco_blue');
        $('.rc2').removeClass('reco_blue');
        $('.rc4').removeClass('reco_blue');
        $('.rc5').removeClass('reco_blue');
        $('.rc6').removeClass('reco_blue');
        $('#reco3').fadeIn(1000);
        $('#reco1').hide();
        $('#reco2').hide();
        $('#reco4').hide();
        $('#reco5').hide();
        $('#reco6').hide();
    });

    $('.rc4').click(function () {
        $('.rc4').addClass('reco_blue');
        $('.rc1').removeClass('reco_blue');
        $('.rc2').removeClass('reco_blue');
        $('.rc3').removeClass('reco_blue');
        $('.rc5').removeClass('reco_blue');
        $('.rc6').removeClass('reco_blue');
        $('#reco4').fadeIn(1000);
        $('#reco1').hide();
        $('#reco2').hide();
        $('#reco3').hide();
        $('#reco5').hide();
        $('#reco6').hide();
    });

    $('.rc5').click(function () {
        $('.rc5').addClass('reco_blue');
        $('.rc1').removeClass('reco_blue');
        $('.rc2').removeClass('reco_blue');
        $('.rc3').removeClass('reco_blue');
        $('.rc4').removeClass('reco_blue');
        $('.rc6').removeClass('reco_blue');
        $('#reco5').fadeIn(1000);
        $('#reco1').hide();
        $('#reco2').hide();
        $('#reco3').hide();
        $('#reco4').hide();
        $('#reco6').hide();
    });

    $('.rc6').click(function () {
        $('.rc6').addClass('reco_blue');
        $('.rc1').removeClass('reco_blue');
        $('.rc2').removeClass('reco_blue');
        $('.rc3').removeClass('reco_blue');
        $('.rc4').removeClass('reco_blue');
        $('.rc5').removeClass('reco_blue');
        $('#reco6').fadeIn(1000);
        $('#reco1').hide();
        $('#reco2').hide();
        $('#reco3').hide();
        $('#reco4').hide();
        $('#reco5').hide();
    });
});