import { Injectable } from "@angular/core";
import { ActiveToast, IndividualConfig, ToastrService } from "ngx-toastr";

@Injectable({providedIn: 'root'})

export class ToastService {
    private config = {}
    constructor(private toastr: ToastrService) {}

    showError(title: string, message: string) : ActiveToast<any> {
       return this.showToast(title, message)
    }

    showInfo(title: string, message: string) : ActiveToast<any> {
        return this.showToast(title, message)
    }

    showSuccess(title: string, message: string) : ActiveToast<any> {
        return this.showToast(message, title)
    }
    showToast(title: string, message: string, config?: Partial<IndividualConfig>) {
        return this.toastr.show(message, title, config);
    }
}