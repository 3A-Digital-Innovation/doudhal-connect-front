import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { routes } from '../helpers/routes/routes';

export interface SideBarMenu {
  menuValue: string;
  route: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  icon: string;
  base: string;
  subMenus: SubMenu[];
}

export interface SubMenu {
  menuValue: string;
  route: string;
  base: string;
  base2: string;
  base3: string;
  base4: string;
  base5: string;
  base6: string;
}

export interface SideBar {
  tittle: string;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: SideBarMenu[];
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public sideBar: SideBar[] = [
    {
      tittle: 'Main Menu',
      icon: 'airplay',
      showAsTab: true,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Students',
          route: routes.dashboard,
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'graduation-cap',
          base: 'students',
          subMenus: [
            {
              menuValue: 'Student List',
              route: routes.studentlist,
              base: 'students-list',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Student View',
              route: routes.studentview,
              base: 'students-details',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Student Add',
              route: routes.studentsadd,
              base: 'students-add',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
            {
              menuValue: 'Student Edit',
              route: routes.studentsedit,
              base: 'students-edit',
              base2: '',
              base3: '',
              base4: '',
              base5: '',
              base6: '',
            },
          ],
        },
      ],
    },
  ];
  
  public getSideBarData: BehaviorSubject<Array<SideBar>> = new BehaviorSubject<
    Array<SideBar>
  >(this.sideBar);
  events = [
    { id: 1, title: 'event 1', date: '2020-12-01', className: 'bg-purple' },
    { id: 2, title: 'event 2', date: '2020-12-17', className: 'bg-success' },
  ];

  public resetData(): void {
    // reset sidebar data
    this.sideBar.splice(5, 1);
    this.sideBar.splice(4, 1);
    this.sideBar.splice(3, 1);
  }
}

export interface data {
  id: number;
  routeName: string;
  vehicleNumber: string;
  driverName: string;
  driverLicense: string;
  contactNumber: string;
  driverAddress: string;
}
export interface timetabledata {
  id: number;
  idNo: string;
  name: string;
  class: string;
  subject: string;
  startTime: string;
  endTime: string;
  date: string;
}
export interface teachersList {
  id: number;
  idNo: string;
  name: string;
  class: string;
  gender: string;
  subject: string;
  section: string;
  mobileNumber: string;
  address: string;
}
export interface teachgrids {
  id: number;
  images: string;
  username: string;
  details: string;
}
export interface defaultData {
  name: string;
  position: string;
  office: string;
  age: string;
  startdate: string;
  salary: string;
}

export interface subjectsList {
  id: number;
  idNo: string;
  name: string;
  class: string;
}

export interface studentsList {
  id: number;
  idNo: string;
  name: string;
  class: string;
  dob: string;
  parentName: string;
  mobileNumber: string;
  address: string;
}
export interface grids {
  id: number;
  images: string;
  username: string;
  details: string;
}
export interface sports {
  id: number;
  idNo: string;
  name: string;
  coach: string;
  startedYear: string;
}
export interface social {
  id: number;
  icon: string;
}

export interface library {
  id: number;
  idNo: string;
  name: string;
  language: string;
  department: string;
  class: string;
  type: string;
  status: string;
}
export interface recurringInvoices {
  id: number;
  idno: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  lastInvoice: string;
  nextInvoice: string;
  frequency: string;
  status: string;
}
export interface paidInvoices {
  id: number;
  idno: string;
  category: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  paidOn: string;
  status: string;
}
export interface overdueInvoices {
  id: number;
  idno: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  lastDate: string;
  status: string;
}
export interface invoicesList {
  s_no: number;
  idno: string;
  category: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  dueDate: string;
  status: string;
  user: string;
}
export interface draftInvoices {
  id: number;
  createdOn: string;
  invoiceto: string;
  amount: string;
}

export interface cancelledInvoices {
  s_no: number;
  idno: string;
  createdOn: string;
  invoiceto: string;
  amount: string;
  cancelledOn: string;
}

export interface hostel {
  id: number;
  block: string;
  roomNo: string;
  roomType: string;
  noOfBeds: string;
  costPerBed: string;
  availability: string;
}

export interface holidayList {
  id: number;
  idNo: string;
  holidayName: string;
  type: string;
  startDate: string;
  endDate: string;
}

export interface feesList {
  id: number;
  idNo: string;
  feesName: string;
  class: string;
  amount: string;
  startDate: string;
  endDate: string;
}
export interface examList {
  id: number;
  examName: string;
  class: string;
  subject: string;
  startTime: string;
  endTime: string;
  date: string;
}
export interface departmentsList {
  id: number;
  idNo: string;
  name: string;
  hod: string;
  startedYear: string;
  noOfStudents: string;
}
export interface blogs {
  id: number;
  imgs: string;
  eyes: string;
  img2: string;
  names: string;
  date: string;
  para: string;
  para2: string;
}

export interface salaryList {
  id: number;
  idNo: string;
  name: string;
  gender: string;
  joiningDate: string;
  amount: string;
  status: string;
}

export interface feesCollection {
  id: number;
  idNo: string;
  name: string;
  gender: string;
  feesType: string;
  amount: string;
  paidDate: string;
  status: string;
}
export interface expensesList {
  id: number;
  idNo: string;
  itemName: string;
  itemQuality: string;
  amount: string;
  purchaseSource: string;
  purchaseDate: string;
  purchaseBy: string;
}
