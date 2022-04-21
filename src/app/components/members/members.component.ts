import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IMember } from 'src/app/interfaces/imember';
import { MembersService } from 'src/app/service/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  
  dataSource = new MatTableDataSource < IMember >();
  displayedColumns: string[] = ['memberNr', 'membership', 'startData', 'expirationData', 'payment'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  sort: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  constructor( private membersServices: MembersService) { }
  
  
  getMemberDetail(){
    this.membersServices
      .getMember()
      .subscribe(
      (data:any) => {
        this.dataSource = new MatTableDataSource <IMember>(data);
        this.dataSource.data = data;
        // console.log(this.dataSource.data)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        return data;
      },
      (err) => {console.log(err)}
    )
  }

  ngOnInit(): void {
    this.getMemberDetail();
  }

}

