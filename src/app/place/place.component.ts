import {Component, OnInit, Pipe, PipeTransform} from "@angular/core";
import {Place} from '../shared/place';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  place: Place;
  places: Place[];
  url: SafeUrl;

  constructor(public sanitizer: DomSanitizer) {
    this.places = [
      {name: 'Kellosaaren puisto', map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1985.0875165333596!2d24.90808306610611!3d60.16273003195819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m5!1s0x46920a4931f7d077%3A0xb09726d7eb0da611!2sKellosaarenpuisto!3m2!1d60.1619059!2d24.909935599999997!5e0!3m2!1sen!2sfi!4v1527865747176'},
      {name: 'Ruoholahdentori', map: 'https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d992.5654021682474!2d24.909789!3d60.1620134!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m3!3m2!1d60.1619265!2d24.9134387!5e0!3m2!1sen!2sfi!4v1527865799448'},
      {name: 'Ruoholahdenpuisto', map: 'https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d992.5690294439519!2d24.9139571!3d60.1618933!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m3!3m2!1d60.1618217!2d24.9175842!5e0!3m2!1sen!2sfi!4v1527865826899'},
      {name: 'Kaapelipuisto', map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1985.0659278449973!2d24.905518416106084!3d60.16308743195828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m5!1s0x46920a48b32a94df%3A0x93692040915a9c82!2sKaapelipuisto!3m2!1d60.162656399999996!2d24.9052257!5e0!3m2!1sen!2sfi!4v1527865849032'},
      {name: 'Lapinniemi', map: 'https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3969.8264482899176!2d24.907644!3d60.1656154!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m3!3m2!1d60.1674948!2d24.9138065!5e0!3m2!1sen!2sfi!4v1527865880905'},
      {name: 'Jaalarannanpuisto', map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3970.238627495161!2d24.90854642953924!3d60.162203627831744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m5!1s0x46920a4eae299615%3A0x1f4c04f19a137faa!2sSkutstrandsparken%2C+Jaalaranta%2C+00180+Helsinki!3m2!1d60.1609262!2d24.9126518!5e0!3m2!1sen!2sfi!4v1527865913144'},
      {name: 'Kellosaaren rantapuisto', map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1985.0973624959734!2d24.908110116106062!3d60.1625670319581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m5!1s0x46920a494bdbbb2f%3A0x13a4cb12a4fb0b71!2sSk%C3%A4llars+strandparken%2C+Kellosaarenranta%2C+00180+Helsinki!3m2!1d60.1615781!2d24.9113302!5e0!3m2!1sen!2sfi!4v1527865941417'},
      {name: 'Ruoholahden kanavan eteläpuoli', map: 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d992.5493533085767!2d24.91182945844755!3d60.162544779999166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m3!3m2!1d60.1615323!2d24.915699699999998!5e0!3m2!1sen!2sfi!4v1527865979698'},
      {name: 'Salmisaaren rantaportaat (Piritan suosikki)', map: 'https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3969.986158583802!2d24.90058547953982!3d60.164293427835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x46920a48e2e452ef%3A0xcd2b31166267ca1d!2sIt%C3%A4merenkatu+21%2C+00180+Helsinki!3m2!1d60.163556!2d24.9101479!4m3!3m2!1d60.165511499999994!2d24.899908399999997!5e0!3m2!1sen!2sfi!4v1527866011004'}
      ];
  }

  ngOnInit() {
    this.randomPlace();
  }

  public randomPlace(): void {
    this.place = this.places[Math.floor(Math.random() * this.places.length)];
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.place.map)
  }
}
