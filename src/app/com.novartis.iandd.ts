// export namespace com.novartis.iandd{
   export class ServiceRequest {
      serviceRequestId: string;
      doctor: Prescriber;
      patient: Patient;
      insurer: Insurer;
      copayAssistance: boolean;
      insurerApproveReject: boolean;
      prescriberPrescriptionAuthorization: boolean;
      patientAuthorization: boolean;
      PASIndex: number;
      additionalComments: string;
      workflowStatus: Status;
   }
   export enum Status {
      WAITING_FOR_PATIENT_APPROVAL,
      WAITING_FOR_PRESCRIBER_APPROVAL,
      WAITING_FOR_INSURER,
   }
   export class DoctorCertificate {
      registrationNumber: string;
      expiryDate: Date;
   }
   export enum Sex {
      MALE,
      FEMALE,
   }
   export enum ConsentType {
      PATIENT_DATA_SHARE_CONSENT,
      PRESCRIBER_DATA_SHARE_CONSENT,
      LIAISON_APPROVE_REJECT,
      INSURER_APPROVE_REJECT,
      PRESCRIBER_PRESCRIPTION_AUTH,
      COPAY_ASSISTANCE,
   }
   export class Patient {
      patientId: string;
      firstName: string;
      lastName: string;
      address: string;
      socialSecurityNumber: string;
      sex: Sex;
      sharePrivateInfo: boolean;
      insurer: Insurer;
   }
   export class Prescriber {
      prescriberId: string;
      firstName: string;
      lastName: string;
      certificate: DoctorCertificate;
      prescriberDataShareConsent: boolean;
      patient: Patient[];
   }
   export class Liaison {
      liaisonId: string;
      firstName: string;
      lastName: string;
      liaisonOrg: string;
      liaisonEmail: string;
   }
   export class Insurer {
      insurerId: string;
      insurerOrgName: string;
      insurerOrgId: string;
      insurerOrgEmail: string;
   }
   export class UpdateInsurerFlags {
      txId: string;
      serviceRequestRef: ServiceRequest;
      copayAssistance: boolean;
      insurerApproveReject: boolean;
      timestamp: Date;
   }
   export class UpdatePatientFlags {
      txId: string;
      serviceRequestRef: ServiceRequest;
      patientAuthorization: boolean;
      timestamp: Date;
   }
// }
