import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cards: any[], searchTerm: string, dashboardData: string): any[] {
    return cards.filter(card => 
      (dashboardData === 'all' || card.role === dashboardData) &&
      (card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.address.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }
  
}
