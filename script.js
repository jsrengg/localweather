$(document).ready(function() {
  
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(locSuccess,locError);
  }

  function locSuccess(position) {
      var lat = position.coords.latitude.toString(); 
      var lon = position.coords.longitude.toString();
      displayWeather(lat,lon);
  } 

  function locError(err) {
    //pass hard coded coordinates for london
    var lon = "-0.13";
    var lat = "51.51";
    displayWeather(lat,lon);
  }
  
  function displayWeather(lat, lon, condition){
    var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
    
    $.getJSON( api, function(data) {
      $('#place').html(data["name"]);
      $('#deg').html(Math.round(data.main.temp));
      $('#description').html((data.weather[0].description).toUpperCase());
      //DISPLAY correct icon

      //clear weather conditions
      if(data.weather[0].id == 800) {
        $("img").attr("src","https://lh3.googleusercontent.com/eDGYEuyu2AmxS0MrSoqi4bB-_027cs6DoVdFIUAfoLJBcoXs1Iwf_t0ti0zwEbqd5kwp7pt516yQXzhYSvwoaZ6JINCA05SsmAN2XHJ7T0fS8B8Y1hNfdlCsSmd9MCwMSJ9yWtl-OtAsvS4M--fT2iGzS04-TQTJHNTMtMGAYT1xehPqWtJUdPfjEu2BBgEFcVKFpGEM3e7RDAVxBmToWiE4h5uMojLBuu1nJawm4ssLT6izNHtCtzz-QNRhFILLm5l4DNHQ1usq08Rhq6tItR93SsY7Pp_Z92g-5-DlvqIIhsxxnryAedeRpIy6ANqoglPUonQYWpHfiy6r9ZhLbKGaO8_mDxeh1JJku0AVacEzzTpX1i5tnDcovWhOWmJwsvK5ljq-tE6h7zlhp9FbElOMzdEnJo5Q7gNlgqsUcG0DNgJZ-znQ1J5lmCu8GX-rBapxFkhU4aDxOL0lh2tGcI6Vv_BC129HrLiOYo6kdwYAYqL5swb2cz63Mnqd_nVzK9ZXYShK2FoCjZVUify_-eMZbqTbf1TdpdMkguxoANTYgzRQbsiRrAaq5J31cWuiURjF4PY5EmQA89LpkKxALkDeLedTDGA-8F_TtlIaUlIO8i_Xld7jxfPm5kLgfwm3S_ghV4hbFx4Wy5bHh39W6CrJyeuDVHA=s512-no");
      }
      //thunderstorm
      else if (data.weather[0].id >= 200 && data.weather[0].id < 300){
        $("img").attr("src","https://lh3.googleusercontent.com/mAOVO7UklxABGUrLaD9dkdomBfN3VJ_PYxOOrKkGZjCjyKLmO9pCLt3mxj6zqaQB8QAH0MTz61-t12e3d6aquQaFKoPjmFOn4VBa49bWNnkbMBsofsV7mL6TWTlkaDxCkJik83xp=s512-no");
      }
      //rain or drizzle
      else if (data.weather[0].id >= 300 && data.weather[0].id < 600){
        $("img").attr("src","https://lh3.googleusercontent.com/Q1vsa6S_L67sEiPJM7IRARaUR_FTJ-YlO_KpTmEPfY9AHEcpW8ZKBVoI75JnfS2k7xtzFLe0FPRkxTKu6yU4DPVFN4BAvNHJNiOldjRFpMeg5DdZ-wMtru9HB52p_xxToJigtQlizSWKIGn0N1zrdQITX4MBxiVV9oARqt9rgEE4-jVTe8RdMQsb45lAPw_TKVusRTQYtf2glb_vM74giJ8Am1_zzVXW8PTchfaJmtVPvOWKXYCx5cKuIeMhCO9-qYrAPzHKEz5KlDfmOfK7dlu-hKz3mxyf79-lR_4g2H-TZCQ2jLy1wS6mTH0BCR_hwbn7_MPCYCASJN4ED_8RRGmQ2uEluR9P04y3RnClopd5a6HAfFgXlsFgStwhM5UGZeTtNDGP7zf5mRTDqiF4D5qwt1qpHCSq-LyFFLXx96qN0MJUrVmgI1TWj9rBX9yInI7kzfbKTk19s11o6-IIrNhiLEPVWXdjbe7fCQM2tIvnG79LkKoy1hDyYUsnxe4DCouYRZUvtDgX3jmFgMYd8eRCfx9uBBX-JxnQdAMBeTWkqfj8NnUW3L4Cyw7JaFvLkabpM0yLgBJdhM_uyCtGsi8bPp1hZbb7WbNEIz2DcPr8uwG6fGZ-78BxG1iQdJ6wyByKyRqa_GwvrBWo6clsp4vsliCfj518EvmI9EBGY_k3FLIfEkHzgSSCfHjlx6NP1k1AxCEH8hTrB0ZCMLZV844=s512-no");
      }
      //snow
      else if (data.weather[0].id >= 600 && data.weather[0].id < 700){
        $("img").attr("src","https://lh3.googleusercontent.com/zPUadzj01SshuQmH6ONNrjROan0KaEdez5eSjYtMI9YD1qaTkOMDL7HtRm9PBgoAZmB8MOsXo3uDEFwLhKAbfjJ8ADIMg_cbGs8_W3yNO4iKtpoZC99opFBLEMGDllZ1A30humWPaVrh0MEV8iewa9CtJfo3hLJHIIRS407F5lb3MipgHzI0Xk-03jpMfcSdX-waK5YpEml7yw3oEQO45NxHcz8DdSq6A6-y8pz-dkJhf-7IiGIgaDRtndiSATSjhMRu13gSZ79VhqQGvz9kCYd72wzti5B7sdamIIuxPuZRnWYWMCqEYGwwvbOW5tsl2zVOHRZlLPa3UmPRUb8u_BubIBB7kpW9W5SWm5pol8ojA9Gbdaj1ezOQVoF_U2hAyXnwxrN5JkNbcyKqRHePMkXCyY1Hz16RTVIu_2x7MPxvftok2f3i0vS1KnnLg5K1XNSrhmHAj394SD0CH49MC8yYMus-6xNTZt5Rxn8IITX_xaLvd1Lu8ngvGM_Wjoj9x1mIjgSxSvDvpTJeurQTT0DTYLHXdM2B6azTNSGt9StF8qHvheSk_kY4TXwq9OjJPcmRZsLIdYZIog08MyCQIJiW9ZW84WUp6ZL7PbOeZ4H6wk9u8cC4hxO-tDkltKSQl5nWU16csOeT-Q4yKHXfn7Ncvbilh55hwQ66lmaCM7p5w6s9q3_1ezyDuoDt93OKfMLdEwL1CdbUWUt6SCoEZQE=s512-no");
      }
      //atmosphere
      else if (data.weather[0].id >= 700 && data.weather[0].id < 800){
        $("img").attr("src","https://lh3.googleusercontent.com/cGp8kLOo3tXv75__7FuTDv2ylPj3zCxLQ9djC3HUfYCCXSgWCMiLv-XLyBMv32C1QD5mqtVaVfpe8S13rJ6HKGpmqPQ3Q2gfAB0SuExoNV36IIBC5JFmq8M3cXJKj7ISW4H4gYIcEW6K3bR8nLz8e74CNx0HgJ_Pl4BEhPhRfVhR7NhUgk3-Kfd3nPJaTW76FhSvTzrGiHxHHOgmTjGNPTxskwJw9WV4MKeH-zOSPA84PxHP96TNhvSfPCiEuq2OJByxL0hK3nLWH6FxMYywNiEORc0AyKqux6iBfXftwO6dty3YSJUcoPaKB3UD4lfY_dHJ3gWgFeYKZUUewpaQdJKjwk1K6dGjLZd3hNQ7X5eDsac3qQ2l_HKsxpSIRT6hAZlWzgFp_Tqb-cuv24nNM_W3jColTBZNz88i00tRz09DIM1nxVR8hFA0oLSQK-jhg-V9QwrmvH23pcWngdjyykR8zctBCkxHhDmg-Ht3rujzISuS7Yf0vp7R6bEl5Cc2ZGzduAtzfaexlLbL99QnZ5z-iJDcrDsyn8PGpV0AdPv5_TselneDrxGFiyQqZUUkkawpb8_5qOWXQDpmZ90fsmuqad5IT3uQxl2fCFvoo79vhAWN4mFbiMK8AxDp8wP2n6WhXsN9lMKGs0uJgG0CVhhjec2doKWoj-mm9Nwhl1RZ0o0CtArL8I5LcxPZ1F8eEI-wVf3okSCSRIFXOhQdvTg=s512-no");
      }
      //cloudy
      else if (data.weather[0].id >800 && data.weather[0].id < 900){
        $("img").attr("src","https://lh3.googleusercontent.com/5kMlbJ8slhZLHOs-U3CFmDJ9CXf4QcJQxJDwo3E_Wlw237yMVI89Haa1hu12vES6BZCewtLtvN6CIKOZ55UnDTn7ALS8uHY2IW8r3Y_YkLLNqoct1hOgbIGEVgCk3fZHL2M9rDWTRgFoU8r2sNfMarDNeBjbk8bYqL4-a5gPqXCq0F1oI2FRGtTZ8t4poCRzLCyUO8IZlO1q7i6Avnu8zDp0dW4Ldbm0nY13j4dizd_FKnAFuG7vnY6x3PBu9Ela89UCMNCZ3jZJ2z4lGvFivxw_pPk1a4FidGAuw2OHD3AdC7-ewmAgat59_Pmhy_MBbj7ZHtmpBeFH7m_ze6Ef48v5eHGQzkBPu4k2TtZJddqFdmZgg7yYbwoWltrDg1aoFzlvYCZCvLaLXCnsddIrPlU5Wht24uR-FzDKH_G-8J5kW_fzKW-pa772no2CeUDYvmwpSzt-d03O07M7jbS0UGhLkBGobOgrML2A4zGhrEeHAdSKDI_4HOB_JHuKReuoUFrUuLlhBlVPARTBjG7wUwOkA-eU9QNJK830Q05Yl5kMDC0nWDY664oBH0VfjHop7NWmGsnJ-E49IyuH8SErhk1JSlTquHvIREidVsIUygBLNG9D1Z7csDXdtZ5fC8ToysRu6zLpCZ8QdmsrUddXfi1CKSr10SdkflaDjYh5q-KWv0O0j6TeuNghSgcHhK9_Mh-ZCBk_aHz1x2obOBU9IlU=s512-no");
      }
    });
  }
 
  
  //change units when clicking C/F
  $("#fahrenheit").click(switchUnits);
  $("#celcius").click(switchUnits);
  
  function switchUnits(){
    if ($(this).hasClass("chosen")) {
       $("#celcius").toggleClass("chosen"); 
       $("#fahrenheit").toggleClass("chosen");
       var temp = Number($("#deg").text());
       if ($(this).is("#celcius")){
         $('#deg').html(Math.round((temp - 32)*5/9));
       }
       else{
         $('#deg').html(Math.round((temp*9/5) + 32));
       }
    }
  }
  
});