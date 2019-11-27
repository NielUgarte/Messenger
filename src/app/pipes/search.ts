import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    public transform(friendsArray: any, searchString: string) {
        if(!friendsArray){
            return;
        }    
        if(!searchString){
            return friendsArray;   
        }
        
        searchString = searchString.toLocaleLowerCase();
        return friendsArray.filter((item) =>{
            return JSON.stringify(item).toLowerCase().includes(searchString);
        })
        
    }
}