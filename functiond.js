function resetValues() {
    $('#classG').empty();
    $('#classG').append(new Option('Please select', '', true, true));	
    $('#classG').attr("disabled", "disabled");	
	$('#design').empty();
    $('#design').append(new Option('Please select', '', true, true));	
    $('#design').attr("disabled", "disabled");	
}


function populateStan(xmlindata) {

var mySelect = $('#standard');
 $('#classG').disabled = false;
$(xmlindata).find("standard").each(function()
  {
  optionValue=$(this).find("id").text();
  optionText =$(this).find("description").text();
   mySelect.append($('<option></option>').val(optionValue).html(optionText));	
  });
}

function populateClass(xmlindata) {

var mySelect = $('#classG');
$('#classG').removeAttr('disabled');    
$(xmlindata).find("classification").each(function()
  {
  optionValue=$(this).find("id").text();
  optionText =$(this).find("description").text();
   mySelect.append($('<option></option>').val(optionValue).html(optionText));	
  });
}

function populateDesign(xmlindata) {

var mySelect = $('#design');;
 $('#design').removeAttr('disabled');  
$(xmlindata).find("designname").each(function()
  {
  optionValue=$(this).find("id").text();
  optionText =$(this).find("design_name").text();
   mySelect.append($('<option></option>').val(optionValue).html(optionText));	
});
}