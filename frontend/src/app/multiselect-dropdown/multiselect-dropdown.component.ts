import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit {
  asv = [1,2,3];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { id: 1, itemName: "India"},
      { id: 2, itemName: "Canada"},
      { id: 3, itemName: "Australia"},
      { id: 4, itemName: "Singapore"},
    ];
    this.selectedItems = [
      { id: 2, itemName: "Canada"},
      { id: 3, itemName: "Australia"},
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "itemName",
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      // enableSearchFilter: true,
      allowSearchFilter: true,
      classes: "myclass custom-class",
    };
    console.log(this.dropdownList);
    console.log(this.selectedItems);
  }
  onItemSelect(item: any){
    console.log(item['itemName']);
    console.log(this.selectedItems);
  }
  onItemDeSelect(item: any){
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
  onDeSelectAll(items: any){
    console.log(items);
  }
}

