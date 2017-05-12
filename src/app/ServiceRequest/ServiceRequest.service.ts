import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ServiceRequest } from '../com.novartis.iandd';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ServiceRequestService {
    private NAMESPACE: string = 'com.novartis.iandd.ServiceRequest';

    constructor(private dataService: DataService<ServiceRequest>) {
    };

    public getAll = (): Promise<ServiceRequest[]> => {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset = (id:any): Promise<ServiceRequest> => {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset = (itemToAdd: any): Promise<ServiceRequest> => {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset = (id:any, itemToUpdate: any): Promise<ServiceRequest> => {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset = (id:any): Promise<ServiceRequest> => {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
