import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  // Nel constructor vogliamo 2 elementi parametri private
  // ElementRef -> ci fornisce l'elemento su cui è dstat applciata la directive
  // Renderer2 -> un oggeto che useremo per renderizzare le modifica
  constructor(private el:ElementRef, private renderer:Renderer2) {
    //La logica di personalizzazione la facciamo nel constructor

    //otteniamo l'elemnto HTMLElement usando la prop .nativeElement applicata a ElementRef

    //Questa personalizzazione va bene se lavoriamo in un browser
    //Si può fare ma preferiamo imparae a usare il renderer (che va bene in qualunque circostanza)
    // this.el.nativeElement.style.textDecoration = 'underline';

    //In alcuni contesti non vogliamo usare la personalizzazione via browser 
    renderer.setStyle(el.nativeElement, "textDecoration", "underline")


  }
}
