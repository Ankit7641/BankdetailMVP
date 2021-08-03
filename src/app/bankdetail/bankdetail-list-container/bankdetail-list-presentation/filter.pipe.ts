import { Pipe, PipeTransform } from "@angular/core";
import { NgControl } from "@angular/forms";

@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if (!items) return [];
      if (!searchText) return items;
    
      return items.filter(item => {
        return Object.keys(item).some(key => {
          return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
        });
      });
     }
  }

  @Pipe({
    name: 'maskking'
  })
  export class maskking implements PipeTransform {

    
    constructor(public model: NgControl) {}
    transform(value: any, ...args: any[]) {
      throw new Error("Method not implemented.");
    }

    onInputChange(event: string, backspace: any) {
      // remove all mask characters (keep only numeric)
      var newVal = event.replace(/\D/g, '');
      // special handling of backspace necessary otherwise
      // deleting of non-numeric characters is not recognized
      // this laves room for improvement for example if you delete in the 
      // middle of the string
      if (backspace) {
        newVal = newVal.substring(0, newVal.length - 1);
      } 
  
      // don't show braces for empty value
      if (newVal.length == 0) {
        newVal = '';
      } 
      // don't show braces for empty groups at the end
      else if (newVal.length <= 3) {
        newVal = newVal.replace(/^(\d{0,3})/, '($1)');
      } else if (newVal.length <= 6) {
        newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) ($2)');
      } else {
        newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) ($2)-$3');
      }
      // set the new value
    }
  }