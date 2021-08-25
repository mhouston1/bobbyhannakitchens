function ViewportWidth() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if(vw < 576) { 
        /*Rivington*/
        $("#RivingtonCashmere").attr("src","img/Rivington/mobile/Rivington_Cashmere.jpg");
        $("#RivingtonDoveGrey").attr("src","img/Rivington/mobile/Rivington_Dove_Grey.jpg");
        $("#RivingtonDustGrey").attr("src","img/Rivington/mobile/Rivington_Dust_Grey.jpg");
        $("#RivingtonGraphite").attr("src","img/Rivington/mobile/Rivington_Graphite.jpg");
        $("#RivingtonGraphiteDove").attr("src","img/Rivington/mobile/Rivington_Graphite_Dove_Grey.jpg");
        $("#RivingtonStoneGrey").attr("src","img/Rivington/mobile/Rivington_Stone_Grey.jpg");
        $("#RivingtonWhite").attr("src","img/Rivington/mobile/Rivington_White.jpg");

        /*Buckingham*/
        $("#BuckinghamCashmere").attr("src","img/Buckingham/mobile/Buckingham_Cashmere.jpg");
        $("#BuckinghamDakar").attr("src","img/Buckingham/mobile/Buckingham_Dakar.jpg");
        $("#BuckinghamDoveGrey").attr("src","img/Buckingham/mobile/Buckingham_Dove_Grey.jpg");
        $("#BuckinghamDustGrey").attr("src","img/Buckingham/mobile/Buckingham_Dust_Grey.jpg");
        $("#BuckinghamGraphite").attr("src","img/Buckingham/mobile/Buckingham_Graphite.jpg");
        $("#BuckinghamIvory").attr("src","img/Buckingham/mobile/Buckingham_Ivory.jpg");
        $("#BuckinghamLissa").attr("src","img/Buckingham/mobile/Buckingham_Lissa_Oak.jpg");
        $("#BuckinghamMussel").attr("src","img/Buckingham/mobile/Buckingham_Mussel.jpg");
        $("#BuckinghamNavyBlue").attr("src","img/Buckingham/mobile/Buckingham_Navy_Blue.jpg");
        $("#BuckinghamStoneGrey").attr("src","img/Buckingham/mobile/Buckingham_Stone_Grey.jpg");
        $("#BuckinghamWhite").attr("src","img/Buckingham/mobile/Buckingham_White.jpg");

        /*Boston*/
        $("#BostonCashMussel").attr("src","img/Boston/mobile/Boston_Cashmere_and_Mussel.jpg");
        $("#BostonCashmereWhite").attr("src","img/Boston/mobile/Boston_Cashmere_White.jpg");
        $("#BostonDoveGrey").attr("src","img/Boston/mobile/Boston_Dove_Grey.jpg");
        $("#BostonDoveGreyMussel").attr("src","img/Boston/mobile/Boston_Dove_Grey_Mussel.jpg");
        $("#BostonDustGrey").attr("src","img/Boston/mobile/Boston_Dust_Grey_With_Graphite_Island.jpg");
        $("#BostonFjordWhite").attr("src","img/Boston/mobile/Boston_Fjord_White.jpg");
        $("#BostonNavyBlue").attr("src","img/Boston/mobile/Boston_Navy_Blue_And_Dust_Grey.jpg");
        $("#BostonWhite").attr("src","img/Boston/mobile/Boston_White.jpg");

        /*Odyssey*/
        $("#OdysseyBlackWhite").attr("src","img/Odyssey/mobile/Odyssey_Black_and_White.jpg");
        $("#OdysseyCream").attr("src","img/Odyssey/mobile/Odyssey_Cream_Gloss.jpg");
        $("#OdysseyDoveGrey").attr("src","img/Odyssey/mobile/Odyssey_Dove_Grey.jpg");
        $("#OdysseyMiraCosa").attr("src","img/Odyssey/mobile/Odyssey_Mira_Cosa_Vertical.jpg");
        $("#OdysseyWhite").attr("src","img/Odyssey/mobile/Odyssey_White_Gloss.jpg");
        
    } else {
        /*Rivington*/
        $("#RivingtonCashmere").attr("src","img/Rivington/Small/Rivington_Cashmere.jpg");
        $("#RivingtonDoveGrey").attr("src","img/Rivington/Small/Rivington_Dove_Grey.jpg");
        $("#RivingtonDustGrey").attr("src","img/Rivington/Small/Rivington_Dust_Grey.jpg");
        $("#RivingtonGraphite").attr("src","img/Rivington/Small/Rivington_Graphite.jpg");
        $("#RivingtonGraphiteDove").attr("src","img/Rivington/Small/Rivington_Graphite_Dove_Grey.jpg");
        $("#RivingtonStoneGrey").attr("src","img/Rivington/Small/Rivington_Stone_Grey.jpg");
        $("#RivingtonWhite").attr("src","img/Rivington/Small/Rivington_White.jpg");

        /*Buckingham*/
        $("#BuckinghamCashmere").attr("src","img/Buckingham/Small/Buckingham_Cashmere.jpg");
        $("#BuckinghamDakar").attr("src","img/Buckingham/Small/Buckingham_Dakar.jpg");
        $("#BuckinghamDoveGrey").attr("src","img/Buckingham/Small/Buckingham_Dove_Grey.jpg");
        $("#BuckinghamDustGrey").attr("src","img/Buckingham/Small/Buckingham_Dust_Grey.jpg");
        $("#BuckinghamGraphite").attr("src","img/Buckingham/Small/Buckingham_Graphite.jpg");
        $("#BuckinghamIvory").attr("src","img/Buckingham/Small/Buckingham_Ivory.jpg");
        $("#BuckinghamLissa").attr("src","img/Buckingham/Small/Buckingham_Lissa_Oak.jpg");
        $("#BuckinghamMussel").attr("src","img/Buckingham/Small/Buckingham_Mussel.jpg");
        $("#BuckinghamNavyBlue").attr("src","img/Buckingham/Small/Buckingham_Navy_Blue.jpg");
        $("#BuckinghamStoneGrey").attr("src","img/Buckingham/Small/Buckingham_Stone_Grey.jpg");
        $("#BuckinghamWhite").attr("src","img/Buckingham/Small/Buckingham_White.jpg");

        /*Boston*/
        $("#BostonCashMussel").attr("src","img/Boston/Small/Boston_Cashmere_and_Mussel.jpg");
        $("#BostonCashmereWhite").attr("src","img/Boston/Small/Boston_Cashmere_White.jpg");
        $("#BostonDoveGrey").attr("src","img/Boston/Small/Boston_Dove_Grey.jpg");
        $("#BostonDoveGreyMussel").attr("src","img/Boston/Small/Boston_Dove_Grey_Mussel.jpg");
        $("#BostonDustGrey").attr("src","img/Boston/Small/Boston_Dust_Grey_With_Graphite_Island.jpg");
        $("#BostonFjordWhite").attr("src","img/Boston/Small/Boston_Fjord_White.jpg");
        $("#BostonNavyBlue").attr("src","img/Boston/Small/Boston_Navy_Blue_And_Dust_Grey.jpg");
        $("#BostonWhite").attr("src","img/Boston/Small/Boston_White.jpg");

        /*Odyssey*/
        $("#OdysseyBlackWhite").attr("src","img/Odyssey/Small/Odyssey_Black_and_White.jpg");
        $("#OdysseyCream").attr("src","img/Odyssey/Small/Odyssey_Cream_Gloss.jpg");
        $("#OdysseyDoveGrey").attr("src","img/Odyssey/Small/Odyssey_Dove_Grey.jpg");
        $("#OdysseyMiraCosa").attr("src","img/Odyssey/Small/Odyssey_Mira_Cosa_Vertical.jpg");
        $("#OdysseyWhite").attr("src","img/Odyssey/Small/Odyssey_White_Gloss.jpg");
        
    }
};