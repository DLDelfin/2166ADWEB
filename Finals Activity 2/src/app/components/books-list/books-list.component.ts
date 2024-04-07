import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  Books: any = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'description', 'book_type', 'action'];
  dataSource = new MatTableDataSource<any>(this.Books); // Define and initialize dataSource

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res);
      this.Books = res;
      this.dataSource.data = this.Books; // Update dataSource with fetched data
    });
  }

  delete(id: any, index: number) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe(() => {
        this.Books.splice(index, 1);
        this.dataSource.data = this.Books; // Update dataSource after deletion
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
