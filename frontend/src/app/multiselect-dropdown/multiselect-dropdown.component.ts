import { Artist } from './../shared/artist.model';
import { ArtistService } from './../shared/artist.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css'],
  providers: [ArtistService]
})
export class MultiselectDropdownComponent  implements OnInit {
  dropdownSettings = {};
  selectedItems = [];

  constructor(public artistService: ArtistService) {}

  ngOnInit() {
    this.refreshArtistList();
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      allowSearchFilter: true,
      classes: "myclass custom-class",
    };
  }
  refreshArtistList() {
    let tmp = [];
    this.artistService.getArtists().subscribe(data => {
      for(let i=0; i < Object.keys(data).length; i++) {
        tmp.push({ item_id: data[i]._id, item_text: data[i].name });
      }
      this.artistService.artists = tmp;
    });
  }
  onItemSelect(item: any){
    this.selectedItems.push(item);
    console.log(this.selectedItems);
  }
  onItemDeSelect(item: any){
    this.selectedItems = this.selectedItems.filter(({ item_id }) => item_id !== item['item_id']);
    console.log(item);
  }
  onSelectAll(items: any){
    this.selectedItems = [];
    this.selectedItems.push(items);
    // console.log(this.selectedItems);
  }
  onDeSelectAll(items: any){
    this.selectedItems = [];
    // console.log(this.selectedItems);
  }
}

