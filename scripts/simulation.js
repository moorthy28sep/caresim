var cloned = false; // Initialize a flag variable to track cloning
$(document).ready(function() {
	
	$('.planWrapperParent').on('click',function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings('.planWrapperParent').removeClass('active')
	});
	$('.MedicalTherapyPlan1 .saved').on('click',function(e){
		e.preventDefault();
		if($('.MedicalTherapyPlan1 .dropdown').val() != 'default' ){
		$('.planWrapper.MedicalTherapyPlan1 .saved').css('background',' url(images/flagSelected.png) 9px 3px no-repeat');
		$('.planWrapper.MedicalTherapyPlan1 .saved').css('background-size','55%');
		}
	});
	
	
	
	$('.MedicalTherapyPlan1 .dropdown').on('change',function(e){
		e.preventDefault();
		if ($(this).val() === 'default' ) {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			$('.planWrapper.MedicalTherapyPlan1 .saved').removeAttr('style');			
			
		}
		if($(this).val() === '0' ) {
			$('.riskScorePlanMT').css('color','#FDC80C');
			$('ul.riskScorePlanMT li').css('color','#FDC80C');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			
		}
		
		if($(this).val() === '1' ) {
			$('.riskScorePlanMT').css('color','#E30000');
			$('ul.riskScorePlanMT li').css('color','#E30000');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#E30000');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			
		}
		
		if($(this).val() === '2' ) {
			$('.riskScorePlanMT').css('color','#14C01A');
			$('ul.riskScorePlanMT li').css('color','#14C01A');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.CurrentDiagnosis h2').css('color','#14C01A');
			$('.cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#14C01A');
			$('.RiskFactors h2').css('color','#E30000');
			$('.RiskFactors ul li.Plan1500mg').css('color','#E30000');
			$('.LabResultsSmall h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-325mg').removeAttr('style');
			
		}
	});
	
	$('.cusDropDown .dropdown').on('change',function(){
		$('.cusButton').removeClass('displayNone');
	});
	
	$(document).on('change','.cusDropDown .mediciness, .cusDropDown .doses', function(){
		if ($('.cusDropDown .mediciness').val() === '1' &&  $('.cusDropDown .doses').val() === '0') {
			$('.riskScorePlanMT').css('color','#FDC80C');
			$('ul.riskScorePlanMT li').css('color','#FDC80C');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');			
		}
		else if ($('.cusDropDown .mediciness').val() === '1' &&  $('.cusDropDown .doses').val() === '1') {
			$('.riskScorePlanMT').css('color','#E30000');
			$('ul.riskScorePlanMT li').css('color','#E30000');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#E30000');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
		}
		else if ($('.cusDropDown .mediciness').val() === '1' &&  $('.cusDropDown .doses').val() === '2') {
			$('.riskScorePlanMT').css('color','#14C01A');
			$('ul.riskScorePlanMT li').css('color','#14C01A');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.CurrentDiagnosis h2').css('color','#14C01A');
			$('.cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#14C01A');
			$('.RiskFactors h2').css('color','#E30000');
			$('.RiskFactors ul li.Plan1500mg').css('color','#E30000');
			$('.LabResultsSmall h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-325mg').removeAttr('style');
		}
		else {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
		}
		
	});
	
	$(document).on('click','.AddMedication', function() {
		$('.newMedicines1').removeClass('displayNone');
		$(this).removeClass('AddMedication').addClass('AddMedication1');
		$('.delete').removeClass('delete').addClass('delete1');
	});
	
	$(document).on('click','.AddMedication1', function() {
		$('.newMedicines2').removeClass('displayNone');
		$(this).removeClass('AddMedication1').addClass('AddMedication2');
		$('.delete1').removeClass('delete1').addClass('delete2');
	});
	
	$(document).on('click','.AddMedication2', function() {
		$('.newMedicines3').removeClass('displayNone');
		$(this).removeClass('AddMedication2').addClass('AddMedication3');
		$('.delete2').removeClass('delete2').addClass('delete3');
	});
	
	$(document).on('click','.AddMedication3', function() {
		$('.newMedicines4').removeClass('displayNone');
		$(this).removeClass('AddMedication3').addClass('AddMedication4');
		$('.delete3').removeClass('delete3').addClass('delete4');
	});
	
	$(document).on('click','.AddMedication4', function() {
		$('.newMedicines5').removeClass('displayNone');
		$(this).removeClass('AddMedication4').addClass('AddMedication5');
		$('.delete4').removeClass('delete4').addClass('delete5');
	});
	
	$(document).on('click','.AddMedication5', function() {
		$('.newMedicines5').removeClass('displayNone');
		$(this).removeClass('AddMedication5');
	});
	
	$(document).on('click', '.delete1', function() {		
		$('.newMedicines1').addClass('displayNone');
		$(this).removeClass('delete1').addClass('delete');
	});
	$(document).on('click', '.delete2', function() {		
		$('.newMedicines2').addClass('displayNone');
		$(this).removeClass('delete2').addClass('delete1');
	});
	$(document).on('click', '.delete3', function() {		
		$('.newMedicines3').addClass('displayNone');
		$(this).removeClass('delete3').addClass('delete2');
	});
	$(document).on('click', '.delete4', function() {		
		$('.newMedicines4').addClass('displayNone');
		$(this).removeClass('delete4').addClass('delete3');
	});
	$(document).on('click', '.delete5', function() {		
		$('.newMedicines5').addClass('displayNone');
		$(this).removeClass('delete5').addClass('delete4');
	});
/*
 $('.AddMedication').on('click', function() {
    var clone = '<div class="medicines cusDropDown" style="width: 195px; margin-left: -10px; margin-top: -5px; margin-bottom: 2px;"><select class="dropdown mediciness"><option value="0" selected>Custom</option><option value="1">Asprin</option><option value="2">Warfarin</option><option value="3">Dabigatarn</option><option value="4">Rivaroxaban</option><option value="5">Apixaban</option><option value="6">Edoxaban</option></select><select class="dropdown doses" style="margin-left:4px;"><option selected value="default">Dose</option><option value="0">125 mg/ daily</option><option value="1">325 mg/ daily</option><option value="2">500 mg/ daily</option></select></div>'
    $(this).closest('.planWrapper').find('.newMedicines').append(clone);
  });
  
 $(document).on('click', '.delete', function() {
    var lastClonedElement = $(this).closest('.planWrapper').find('.newMedicines .cusDropDown:last');
    lastClonedElement.remove();
  }); */
  
  
  $('.phyThePlan1 .dropdown.phyTheDD').on('change',function(e){
		e.preventDefault();
		if ($(this).val() === 'default' ) {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw, .cards.LabResultsSmall ul li.plan1-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			$('.planWrapper.MedicalTherapyPlan1 .saved').removeAttr('style');			
			
		}
		if($(this).val() === '0' ) {
			$('.riskScorePlanMT').css('color','#E30000');
			$('ul.riskScorePlanMT li').css('color','#E30000');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#E30000');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			
		}
		
		if($(this).val() === '1' ) {
			$('.riskScorePlanMT').css('color','#E30000');
			$('ul.riskScorePlanMT li').css('color','#E30000');
			$('.PlanMT').css('color','#FBC400');
			$('.PlanMTImg').attr('src','images/heartRateYellow.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#FBC400');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#FBC400');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			
		}
			
	});
	
	$('.phyThePlan2 .dropdown.phyTheDD').on('change',function(e){
		e.preventDefault();
		if ($(this).val() === 'default' ) {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.LabResultsSmall ul li.plan1-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			$('.planWrapper.MedicalTherapyPlan1 .saved').removeAttr('style');			
			
		}
		if($(this).val() === '0' ) {
			$('.riskScorePlanMT').css('color','#14C01A');
			$('ul.riskScorePlanMT li').css('color','#14C01A');
			$('.PlanMT').css('color','#14C01A');
			$('.PlanMTImg').attr('src','images/heartRateGreen.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#14C01A');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#14C01A');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			
		}
			
	});
	
	$('.phyThePlan3 .dropdown.phyTheDD').on('change',function(e){
		e.preventDefault();
		if ($(this).val() === 'default' ) {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.LabResultsSmall ul li.plan1-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			$('.planWrapper.MedicalTherapyPlan1 .saved').removeAttr('style');		
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');		
			
		}
		if($(this).val() === '0' ) {
			$('.riskScorePlanMT').css('color','#14C01A');
			$('ul.riskScorePlanMT li').css('color','#14C01A');
			$('.PlanMT').css('color','#14C01A');
			$('.PlanMTImg').attr('src','images/heartRateGreen.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#14C01A');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#14C01A');
			$('.RiskFactors h2').css('color','#FBC400');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').css('color','#FBC400');	
			$('.RiskFactors ul li.plan34hrspw').css('color','#FBC400');				
		}
		if($(this).val() === '1' ) {
			$('.riskScorePlanMT').css('color','#E30000');
			$('ul.riskScorePlanMT li').css('color','#E30000');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#E30000');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');		
		}
		if($(this).val() === '2' ) {
			$('.riskScorePlanMT').css('color','#FBC400');
			$('ul.riskScorePlanMT li.list1').css('color','#FBC400');
			$('ul.riskScorePlanMT li.list2').css('color','#14C01A');
			$('ul.riskScorePlanMT li.list3').css('color','#FFFFFF');
			$('.PlanMT').css('color','#FBC400');
			$('.PlanMTImg').attr('src','images/heartRateYellow.png');
			$('.CurrentDiagnosis h2, .RiskFactors h2').css('color','#FBC400');
			$('.cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#FBC400');
			$('.LabResultsSmall h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').css('color','#FBC400');	
		}
			
	});
  
  $('.nutThePlan1 .dropdown.nutTheDD').on('change',function(e){
		e.preventDefault();
		if ($(this).val() === 'default' ) {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.LabResultsSmall ul li.plan1-5hrspw, .cards.LabResultsSmall ul li.plan1-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			$('.planWrapper.MedicalTherapyPlan1 .saved').removeAttr('style');		
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');		
			
		}
		if($(this).val() === '0' ) {
			$('.riskScorePlanMT').css('color','#14C01A');
			$('ul.riskScorePlanMT li').css('color','#14C01A');
			$('.PlanMT').css('color','#14C01A');
			$('.PlanMTImg').attr('src','images/heartRateGreen.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#14C01A');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#14C01A');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');							
		}
		if($(this).val() === '1' ) {
			$('.riskScorePlanMT').css('color','#FBC400');
			$('ul.riskScorePlanMT li').css('color','#FBC400');
			$('.PlanMT').css('color','#FBC400');
			$('.PlanMTImg').attr('src','images/heartRateYellow.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#FBC400');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#FBC400');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
		}
		if($(this).val() === '2' ) {			
			$('.riskScorePlanMT').css('color','#E30000');
			$('ul.riskScorePlanMT li').css('color','#E30000');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#E30000');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');	
		}
			
	});
   
	$('.nutThePlan2 .dropdown.nutTheDD').on('change',function(e){
		e.preventDefault();
		if ($(this).val() === 'default' ) {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.LabResultsSmall ul li.plan1-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			$('.planWrapper.MedicalTherapyPlan1 .saved').removeAttr('style');		
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');		
			
		}
		if($(this).val() === '0' ) {
			$('.riskScorePlanMT').css('color','#14C01A');
			$('ul.riskScorePlanMT li').css('color','#14C01A');
			$('.PlanMT').css('color','#14C01A');
			$('.PlanMTImg').attr('src','images/heartRateGreen.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#14C01A');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#14C01A');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');							
		}
		if($(this).val() === '1' ) {
			$('.riskScorePlanMT').css('color','#FBC400');
			$('ul.riskScorePlanMT li.list1').css('color','#FBC400');
			$('ul.riskScorePlanMT li.list2').css('color','#14C01A');
			$('ul.riskScorePlanMT li.list3').css('color','#FFFFFF');
			$('.PlanMT').css('color','#FBC400');
			$('.PlanMTImg').attr('src','images/heartRateYellow.png');
			$('.CurrentDiagnosis h2').css('color','#FBC400');
			$('.cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#FBC400');
			$('.LabResultsSmall h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
		}
		if($(this).val() === '2' ) {			
			$('.riskScorePlanMT').css('color','#E30000');
			$('ul.riskScorePlanMT li').css('color','#E30000');
			$('.PlanMT').css('color','#E30000');
			$('.PlanMTImg').attr('src','images/heartRateRed.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').css('color','#E30000');
			$('.cards.LabResultsSmall ul li.plan1-325mg, .cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#E30000');
			$('.RiskFactors h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');	
		}
			
	});
	
	$('.nutThePlan3 .dropdown.nutTheDD').on('change',function(e){
		e.preventDefault();
		if ($(this).val() === 'default' ) {
			$('.riskScorePlanMT').removeAttr('style');
			$('ul.riskScorePlanMT li').removeAttr('style');
			$('.PlanMT').removeAttr('style');
			$('.PlanMTImg').attr('src','images/heartRate.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan2-6hrspw, .cards.LabResultsSmall ul li.plan1-6hrspw, .cards.CurrentDiagnosis ul li.plan1-325mg').removeAttr('style');
			$('.RiskFactors h2').removeAttr('style');
			$('.RiskFactors ul li.Plan1500mg').removeAttr('style');
			$('.planWrapper.MedicalTherapyPlan1 .saved').removeAttr('style');		
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');		
			$('.MedicalImaging ul li.miList, .MedicalImaging .miTitle').removeAttr('style');	
			
		}
		if($(this).val() === '0' ) {
			$('.riskScorePlanMT').css('color','#14C01A');
			$('ul.riskScorePlanMT li').css('color','#14C01A');
			$('.PlanMT').css('color','#14C01A');
			$('.PlanMTImg').attr('src','images/heartRateGreen.png');
			$('.CurrentDiagnosis h2, .MedicalImaging .miTitle').css('color','#14C01A');
			$('.cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#14C01A');
			$('.MedicalImaging ul li.miList').css('color','#14C01A');
			$('.RiskFactors h2, .LabResultsSmall h2').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-6hrspw').removeAttr('style');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').removeAttr('style');	
			$('.cards.LabResultsSmall ul li.plan3-6hrspw').removeAttr('style');			
		}
		if($(this).val() === '1' ) {
			$('.riskScorePlanMT').css('color','#FBC400');
			$('ul.riskScorePlanMT li').css('color','#FBC400');
			$('.PlanMT').css('color','#FBC400');
			$('.PlanMTImg').attr('src','images/heartRateYellow.png');
			$('.LabResultsSmall h2, .CurrentDiagnosis h2, .MedicalImaging .miTitle, .RiskFactors h2').css('color','#FBC400');
			$('.cards.CurrentDiagnosis ul li.plan1-325mg').css('color','#FBC400');
			$('.MedicalImaging ul li.miList').css('color','#FBC400');			
			$('.cards.LabResultsSmall ul li.plan3-6hrspw').css('color','#FBC400');
			$('.cards.LabResultsSmall ul li.plan1-5hrspw').removeAttr('style');
			$('.RiskFactors ul li.plan34hrspw').css('color','#FBC400');
			$('.RiskFactors ul li.plan34hrspw').css('color','#FBC400');	
		}		
	});
	
	$('#Catheter').on('click',function(){
		$(this).attr('src','images/2-Zoom.gif');
		$('#modTitle').text();
	});
	
	$('.simIcon li.injection').on('click',function(){
		$(this).addClass('active');
		$('#modTitle').text('Attach Sheath');
		$('#Catheter').attr('src','images/3-Incision.gif');
	});
	
	$('.simIcon li.fix').on('click',function(){
		$(this).addClass('active');
		$('#modTitle').text('Insert Catheter');
		$('#Catheter').attr('src','images/4-Catheter.gif');
	});
	
});