$(document).ready(function() {
  
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude.toString(); 
      var lon = position.coords.longitude.toString();
      displayWeather(lat,lon);
    });  
  }
  
  else {
    //pass hard coded coordinates for bellflower or geolocation not available
  }
  
  function displayWeather(lat, lon, condition){
    var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
    
    $.getJSON( api, function(data) {
      $('#place').html(data["name"]);
      $('#deg').html(Math.round(data.main.temp));
      console.log(data.weather[0].main);
      switch (data.weather[0].main) {
        case "Rain":
            $("img").attr("src", "https://lh3.googleusercontent.com/TQ8eUNw62cno-RVLmYiH7KFmC07_CRRKcFOumNtm_jWdkeQyk5guDBJkERKbUNTKI_MTAdC3m-ewqVF0cNQsXvIaWRl8CRzeytPkfLTwD9WSnelmlQA2cZi_7Jr4TEKShI4GJTZul-9f_edYXSznjRKzdWfqt2Db4t9ye3hAzd3Pi0vhDXo-0clJmvovQZM-EBPBwkIFoBNu54dYBYLAINsinvAF46OcVFmZ4S0Fr6eKNoL7U-5h7U5JUcov-2ptpBcsG0-69wxyJRx3G-cMOwNZ3aZ-3kWlED8cRd_Jo1cu2Z2yk8G6e4UBws8aBliYCbBNjk17x0E1dvgqJcQ3i8ge-HbEfbg-68HEUDhtf_mR4p-iMLvceuCuilg_xYlgPSpe7PH1uhKMbBdqLZSlOR65HHVCU2Zsc3L4YkBe8h5X3RSmlpa0IYoW3wthyZBPbel62ssQdXozlvxUPoAHVTvyN46_XS5LCzzKiBZK-UBu7hMVd61EthTG9-18KG_Oac416M8Zhg7z34uf9mNLtC7VVwOnVEgW3h4JblnbBv6dJ-klZq32V9V1O4mo6K4kqelZuWQvXNSRg-VySKgcCBL7H3wnK_dLUjUR60VxicUqKNcuAKy4hRzJjG_ZhvmA2tjyiTdFNyT_HGPARLBXVyybyZRg--U=s512-no");   
        case "Cloudy":
            $("img").attr("src","https://lh3.googleusercontent.com/8dyUBrTJ-8O6cjZJeumrUF3qSynWni8lYfFLF0gg4AHtSjzDuzXiWaqdyZewjA25qqftHvSpTsuiMgWgk1N6xQL8CUezW3l94WlM5p2VtoAr3X6XL1PxQTmwbvmMNnGB2O1l9HsB3ztgV0MR26T9yUT3CX-zBLy7SqdGnUxqPQJ2POmeyok64XetcZTWPJPTS7-5EmpBLzilq6K3V8BQyflrR_iTJ8eJiXo7aA6mrNWlegFWFIDp_TYPY6cq_hewxj-Quv1hprSBVVHU5g-_tpodp6sOvMbS930weYwkjvSoa4oXV8e7Ao2BukUCMit3V9QfZ0riY18PO6_Vgeezoh2BZ5jZ_Kro4gG7n-EdPIw4poTPUEgTPSC5aHWOUCZ4BY5gKoXkc95R-nzIrhRcff2Qvmy4SUPeG8RmAiKCtN-qzb9T8EB2q9oMXXzAq4tyx2iicA21Qrvb0bHwXZojp4Sf6bESjvOvtik3X9pTi5x39NHj4Dc6wbviVpmXw1-Ktjqd1i4HN3R2OlTCwmWj3aswQ_Rzrn14fd3n_6_o-j6kvU4RsN4s78x5xJ8kftUECYSyATN2rfX_puQpP--8APBHdLeYIz9JO3eKRImDtDsn6JZkvPY21pltprs61Nu2O_jSehJcPmsa5tSeKe9Jrkil24L7fVQ=s512-no");
            break;
        case "Clear":
            $("img").attr("src","https://lh3.googleusercontent.com/eDGYEuyu2AmxS0MrSoqi4bB-_027cs6DoVdFIUAfoLJBcoXs1Iwf_t0ti0zwEbqd5kwp7pt516yQXzhYSvwoaZ6JINCA05SsmAN2XHJ7T0fS8B8Y1hNfdlCsSmd9MCwMSJ9yWtl-OtAsvS4M--fT2iGzS04-TQTJHNTMtMGAYT1xehPqWtJUdPfjEu2BBgEFcVKFpGEM3e7RDAVxBmToWiE4h5uMojLBuu1nJawm4ssLT6izNHtCtzz-QNRhFILLm5l4DNHQ1usq08Rhq6tItR93SsY7Pp_Z92g-5-DlvqIIhsxxnryAedeRpIy6ANqoglPUonQYWpHfiy6r9ZhLbKGaO8_mDxeh1JJku0AVacEzzTpX1i5tnDcovWhOWmJwsvK5ljq-tE6h7zlhp9FbElOMzdEnJo5Q7gNlgqsUcG0DNgJZ-znQ1J5lmCu8GX-rBapxFkhU4aDxOL0lh2tGcI6Vv_BC129HrLiOYo6kdwYAYqL5swb2cz63Mnqd_nVzK9ZXYShK2FoCjZVUify_-eMZbqTbf1TdpdMkguxoANTYgzRQbsiRrAaq5J31cWuiURjF4PY5EmQA89LpkKxALkDeLedTDGA-8F_TtlIaUlIO8i_Xld7jxfPm5kLgfwm3S_ghV4hbFx4Wy5bHh39W6CrJyeuDVHA=s512-no");
       
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