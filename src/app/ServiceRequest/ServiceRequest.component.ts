import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceRequestService } from './ServiceRequest.service';
@Component({
	selector: 'app-ServiceRequest',
	templateUrl: './ServiceRequest.component.html',
	styleUrls: ['./ServiceRequest.component.css']
})
export class ServiceRequestComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;

  
      serviceRequestId = new FormControl("", Validators.required);
  
      doctor = new FormControl("", Validators.required);
  
      patient = new FormControl("", Validators.required);
  
      insurer = new FormControl("", Validators.required);
  
      copayAssistance = new FormControl("", Validators.required);
  
      insurerApproveReject = new FormControl("", Validators.required);
  
      prescriberPrescriptionAuthorization = new FormControl("", Validators.required);
  
      patientAuthorization = new FormControl("", Validators.required);
  
      PASIndex = new FormControl("", Validators.required);
  
      additionalComments = new FormControl("", Validators.required);
  
      workflowStatus = new FormControl("", Validators.required);
  


  constructor(private serviceServiceRequest:ServiceRequestService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          serviceRequestId:this.serviceRequestId,
        
    
        
          doctor:this.doctor,
        
    
        
          patient:this.patient,
        
    
        
          insurer:this.insurer,
        
    
        
          copayAssistance:this.copayAssistance,
        
    
        
          insurerApproveReject:this.insurerApproveReject,
        
    
        
          prescriberPrescriptionAuthorization:this.prescriberPrescriptionAuthorization,
        
    
        
          patientAuthorization:this.patientAuthorization,
        
    
        
          PASIndex:this.PASIndex,
        
    
        
          additionalComments:this.additionalComments,
        
    
        
          workflowStatus:this.workflowStatus
        
    
    });
  };

  ngOnInit():void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceServiceRequest.getAll().then((result) => {
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "com.novartis.iandd.ServiceRequest",
      
        
          "serviceRequestId":this.serviceRequestId.value,
        
      
        
          "doctor":this.doctor.value,
        
      
        
          "patient":this.patient.value,
        
      
        
          "insurer":this.insurer.value,
        
      
        
          "copayAssistance":this.copayAssistance.value,
        
      
        
          "insurerApproveReject":this.insurerApproveReject.value,
        
      
        
          "prescriberPrescriptionAuthorization":this.prescriberPrescriptionAuthorization.value,
        
      
        
          "patientAuthorization":this.patientAuthorization.value,
        
      
        
          "PASIndex":this.PASIndex.value,
        
      
        
          "additionalComments":this.additionalComments.value,
        
      
        
          "workflowStatus":this.workflowStatus.value
        
      
    };

    this.myForm.setValue({
      
        
          "serviceRequestId":null,
        
      
        
          "doctor":null,
        
      
        
          "patient":null,
        
      
        
          "insurer":null,
        
      
        
          "copayAssistance":null,
        
      
        
          "insurerApproveReject":null,
        
      
        
          "prescriberPrescriptionAuthorization":null,
        
      
        
          "patientAuthorization":null,
        
      
        
          "PASIndex":null,
        
      
        
          "additionalComments":null,
        
      
        
          "workflowStatus":null
        
      
    });

    return this.serviceServiceRequest.addAsset(this.asset).then(() => {
      this.myForm.setValue({
      
        
          "serviceRequestId":null,
        
      
        
          "doctor":null,
        
      
        
          "patient":null,
        
      
        
          "insurer":null,
        
      
        
          "copayAssistance":null,
        
      
        
          "insurerApproveReject":null,
        
      
        
          "prescriberPrescriptionAuthorization":null,
        
      
        
          "patientAuthorization":null,
        
      
        
          "PASIndex":null,
        
      
        
          "additionalComments":null,
        
      
        
          "workflowStatus":null 
        
      
      });
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.novartis.iandd.ServiceRequest",
      
        
          "serviceRequestId":this.serviceRequestId.value,
        
    
        
          "doctor":this.doctor.value,
        
    
        
          "patient":this.patient.value,
        
    
        
          "insurer":this.insurer.value,
        
    
        
          "copayAssistance":this.copayAssistance.value,
        
    
        
          "insurerApproveReject":this.insurerApproveReject.value,
        
    
        
          "prescriberPrescriptionAuthorization":this.prescriberPrescriptionAuthorization.value,
        
    
        
          "patientAuthorization":this.patientAuthorization.value,
        
    
        
          "PASIndex":this.PASIndex.value,
        
    
        
          "additionalComments":this.additionalComments.value,
        
    
        
          "workflowStatus":this.workflowStatus.value
        
    
    };


    return this.serviceServiceRequest.updateAsset(this.asset.serviceRequestId,this.asset);
  }


  deleteAsset(): Promise<any> {

    return this.serviceServiceRequest.deleteAsset(this.currentId);
  }

  setId(id:any):void{
    this.currentId = id;
  }

  getForm(id:any):Promise<any>{

    return this.serviceServiceRequest.getAsset(id).then((result) => {

      let formObject = {
        
          
            "serviceRequestId":null,
          
        
          
            "doctor":null,
          
        
          
            "patient":null,
          
        
          
            "insurer":null,
          
        
          
            "copayAssistance":null,
          
        
          
            "insurerApproveReject":null,
          
        
          
            "prescriberPrescriptionAuthorization":null,
          
        
          
            "patientAuthorization":null,
          
        
          
            "PASIndex":null,
          
        
          
            "additionalComments":null,
          
        
          
            "workflowStatus":null 
          
        
      };



      
        if(result.serviceRequestId){
          formObject.serviceRequestId = result.serviceRequestId;
        }else{
          formObject.serviceRequestId = null;
        }
      
        if(result.doctor){
          formObject.doctor = result.doctor;
        }else{
          formObject.doctor = null;
        }
      
        if(result.patient){
          formObject.patient = result.patient;
        }else{
          formObject.patient = null;
        }
      
        if(result.insurer){
          formObject.insurer = result.insurer;
        }else{
          formObject.insurer = null;
        }
      
        if(result.copayAssistance){
          formObject.copayAssistance = result.copayAssistance;
        }else{
          formObject.copayAssistance = null;
        }
      
        if(result.insurerApproveReject){
          formObject.insurerApproveReject = result.insurerApproveReject;
        }else{
          formObject.insurerApproveReject = null;
        }
      
        if(result.prescriberPrescriptionAuthorization){
          formObject.prescriberPrescriptionAuthorization = result.prescriberPrescriptionAuthorization;
        }else{
          formObject.prescriberPrescriptionAuthorization = null;
        }
      
        if(result.patientAuthorization){
          formObject.patientAuthorization = result.patientAuthorization;
        }else{
          formObject.patientAuthorization = null;
        }
      
        if(result.PASIndex){
          formObject.PASIndex = result.PASIndex;
        }else{
          formObject.PASIndex = null;
        }
      
        if(result.additionalComments){
          formObject.additionalComments = result.additionalComments;
        }else{
          formObject.additionalComments = null;
        }
      
        if(result.workflowStatus){
          formObject.workflowStatus = result.workflowStatus;
        }else{
          formObject.workflowStatus = null;
        }
      

      this.myForm.setValue(formObject);

    })

  }

  resetForm():void{
    this.myForm.setValue({
      
        
          "serviceRequestId":null,
        
      
        
          "doctor":null,
        
      
        
          "patient":null,
        
      
        
          "insurer":null,
        
      
        
          "copayAssistance":null,
        
      
        
          "insurerApproveReject":null,
        
      
        
          "prescriberPrescriptionAuthorization":null,
        
      
        
          "patientAuthorization":null,
        
      
        
          "PASIndex":null,
        
      
        
          "additionalComments":null,
        
      
        
          "workflowStatus":null 
        
      
      });
  }

}
