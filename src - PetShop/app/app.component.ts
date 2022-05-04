import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation, Inject} from '@angular/core';
import {ShoppingCartService} from './shared/shoppingcart/shoppingcart.service';
import {ShoppingCartComponent} from './shared/shoppingcart/shoppingcart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  public constructor(protected shoppingCartService: ShoppingCartService,
                     @Inject('environment') public environment,
                     protected renderer: Renderer2) {

  }

  title = 'Pet Store';

  @ViewChild("shoppingcart", {static: false}) shoppingCartComponent: ShoppingCartComponent;
  @ViewChild("shoppingcartcontainer", {static: false}) shoppingCartContainer: ElementRef;


  public ngOnInit() {
    console.log("inicializado");
  }

  public ngAfterViewInit() {
    console.log("after view init");
  }

  public ngOnDestroy() {
    console.log("destroyed");
  }

  public showShoppingCartContentFromParent() {
    this.shoppingCartComponent.showShoppingCartDetails();
  }


}
