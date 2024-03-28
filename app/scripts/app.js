var client;

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') renderApp();
  function renderApp() {
    var onInit = app.initialized();

    onInit.then(getClient).catch(handleErr);

    function getClient(_client) {
      client = _client;
      client.events.on('app.activated', onAppActivate);
    }
  }
};

function onAppActivate() {
  var btn = document.querySelector('.btn-open');
  btn.addEventListener('click', openModal);
  // Start writing your code...
}

function openModal() {
  $('.loader').show();
  client.interface.trigger(
    'showModal',
    useTemplate('Title of the Modal', './views/modal.html')
  );
}

function useTemplate(title, template) {
  return {
    title,
    template
  };
}


function cityData() {
  const value = document.querySelector(".postal-code").value.trim();
  const val = value;


  console.log(val.length);
  
      //  changed the url from api dynanet to worldpostallocations with api key
  $.get("https://api.worldpostallocations.com/v1/search?apikey=1133-d3c4ce2e-00b5cd94-b38afb93-3e80fb64f716e6243b2&zip_code=" + val + "&country_code=US", function(data){
     if(data.result.length !=0) {
      zipcode = data.result[0].postalCode;
      city = data.result[0].postalLocation;
      stateid = data.result[0].stateId;
      country = data.result[0].country;
  
      if(country === 'US') {
       fullcountry = "United States"
      }
  
  
      console.log(fullcountry);
     
      var dynamicHTML = '';
  
      $.each(data.result, function (idy, article) {
        dynamicHTML += "<div class='order-wrapper'>";
        dynamicHTML += "<div> <span id='country-name'> Country Name - </span> <span>" +article.country+ "</span></div>";
        dynamicHTML += "<div> <span id='city-name'> City Name - </span> <span>" +article.postalLocation+ "</span></div>";
        dynamicHTML += "<div> <span id='state-id'> State -</span> <span>" +article.stateId+"</span></div>";
        dynamicHTML += "<div> <span id='zipcode'> Zip Code -</span> <span>" +article.postalCode+"</span></div>";
        dynamicHTML += "</div>";   
      });
  
    
      $(".city-details").html(dynamicHTML);
     }   

    console.log(data.result.length);
    //  changed the url from api dynanet to worldpostallocations with api key
    if(data.result.length === 0) {
      $.get("https://api.worldpostallocations.com/v1/search?apikey=1133-d3c4ce2e-00b5cd94-b38afb93-3e80fb64f716e6243b2&zip_code=" + val + "&country_code=MX", function(data){ 
        $('.loader').hide();
        console.log(data);
        zipcode = data.result[0].postalCode;
        city = data.result[0].postalLocation;
        stateid = data.result[0].stateId;
        country = data.result[0].country;

        if(country === 'MX') {
         fullcountry = "Mexico"
        }

        var dynamicHTML = '';

        $.each(data.result, function (idy, article) {
          dynamicHTML += "<div class='order-wrapper'>";
          dynamicHTML += "<div> <span id='country-name'> Country Name - </span> <span>" +article.country+ "</span></div>";
          dynamicHTML += "<div> <span id='city-name'> City Name - </span> <span>" +article.postalLocation+ "</span></div>";
          dynamicHTML += "<div> <span id='state-id'> State -</span> <span>" +article.stateId+"</span></div>";
          dynamicHTML += "<div> <span id='zipcode'> Zip Code -</span> <span>" +article.postalCode+"</span></div>";
          dynamicHTML += "</div>";   
        });
        $(".city-details").html(dynamicHTML);
      });
    }
    //  changed the url from api dynanet to worldpostallocations with api key

    if(data.result.length === 0) {
      $.get("https://api.worldpostallocations.com/v1/search?apikey=1133-d3c4ce2e-00b5cd94-b38afb93-3e80fb64f716e6243b2&zip_code=" + val + "&country_code=AU", function(data){ 
        $('.loader').hide();
        zipcode = data.result[0].postalCode;
        city = data.result[0].postalLocation;
        stateid = data.result[0].stateId;
        country = data.result[0].country;

        if(country === 'AU') {
         fullcountry = "Australia"
        }

        var dynamicHTML = '';

        $.each(data.result, function (idy, article) {
          dynamicHTML += "<div class='order-wrapper'>";
          dynamicHTML += "<div> <span id='country-name'> Country Name - </span> <span>" +article.country+ "</span></div>";
          dynamicHTML += "<div> <span id='city-name'> City Name - </span> <span>" +article.postalLocation+ "</span></div>";
          dynamicHTML += "<div> <span id='state-id'> State -</span> <span>" +article.stateId+"</span></div>";
          dynamicHTML += "<div> <span id='zipcode'> Zip Code -</span> <span>" +article.postalCode+"</span></div>";
          dynamicHTML += "</div>";   
        });
        $(".city-details").html(dynamicHTML);
      });
    }
    
  });

  const cnval = document.querySelector(".postal-code").value.trim();
  var cnlen = cnval.length;
  if( cnlen === 7) {

   console.log("cnand");
     $.get("https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/" + cnval + "?key=WFECM918WXVFCUNMC4AT", function(data){ 
      $('.loader').hide();
       console.log(data.item);
        countryname ='CA';
        city = data.item.City;
        stateid = data.item.Province;
        zipcode = data.item.PostalCode;

        if(countryname === 'CA') {
         fullcountry = "Canada"
        }

        var dynamicHTML = '';

        $.each(data, function () {
          dynamicHTML += "<div class='order-wrapper'>";
          dynamicHTML += "<div> <span id='country-name'> Country Name - </span> <span>" +countryname+ "</span></div>";
          dynamicHTML += "<div> <span id='city-name'> City Name - </span> <span>" +city+ "</span></div>";
          dynamicHTML += "<div> <span id='state-id'> Province -</span> <span>" +stateid+"</span></div>";
          dynamicHTML += "<div> <span id='zipcode'> Zip Code -</span> <span>" +zipcode+"</span></div>";
          dynamicHTML += "</div>";   
        });
        $(".city-details").html(dynamicHTML);
      });
   } else if(cnlen === 6) {
    console.log("cnand");
     $.get("https://api.zip-codes.com/ZipCodesAPI.svc/1.0/GetZipCodeDetails/" + cnval + "?key=WFECM918WXVFCUNMC4AT", function(data){ 
      $('.loader').hide();
       console.log(data.item);
        countryname ='CA';
        city = data.item.City;
        stateid = data.item.Province;
        zipcode = data.item.PostalCode;

        if(countryname === 'CA') {
         fullcountry = "Canada"
        }

        var dynamicHTML = '';

        $.each(data, function () {
          dynamicHTML += "<div class='order-wrapper'>";
          dynamicHTML += "<div> <span id='country-name'> Country Name - </span> <span>" +countryname+ "</span></div>";
          dynamicHTML += "<div> <span id='city-name'> City Name - </span> <span>" +city+ "</span></div>";
          dynamicHTML += "<div> <span id='state-id'> Province -</span> <span>" +stateid+"</span></div>";
          dynamicHTML += "<div> <span id='zipcode'> Zip Code -</span> <span>" +zipcode+"</span></div>";
          dynamicHTML += "</div>";   
        });
        $(".city-details").html(dynamicHTML);
      });
   }
   

  this.helloAgain = function copydata() {
    client.interface.trigger('enable', { id: 'cf_city'} );
    client.interface.trigger('enable', { id: 'cf_select_state'} );
    client.interface.trigger('enable', { id: 'cf_zip'} );
    client.interface.trigger('enable', { id: 'cf_select_country'} );
    client.interface.trigger('enable', { id: 'cf_country'} );
  
    client.interface.trigger("setValue", {id: "cf_city", value: city});
    client.interface.trigger("setValue", {id: "cf_zip", value: zipcode});
    client.interface.trigger("setValue", {id: "cf_select_country", value: fullcountry});
    client.interface.trigger("setValue", {id: "cf_select_state", value: stateid});

    if(country === "AU" || country === "MX") {
      client.interface.trigger("setValue", {id: "cf_select_state", value: "Other"});
    }
  } 
}

var cityValue = new cityData();

$('.copyfield').on('click', function() {
  cityValue.helloAgain();
});

$(".search-product").on("click", function () {
  cityData();      
});

//10