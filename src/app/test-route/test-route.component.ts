import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.scss']
})
export class TestRouteComponent implements OnDestroy {
  id: number;
  product: string;
  price: number;
  openLinkProps = false;

  constructor(private activateRoute: ActivatedRoute) {
    // this.id = activateRoute.snapshot.params['id'];
  }

  private routeSubscription: Subscription = this.activateRoute.params.subscribe( params => this.id = params['id']);
  private querySubscription: Subscription = this.activateRoute.queryParams.subscribe(
    (queryParam: any) => {
      this.product = queryParam['product'];
      this.price = queryParam['price'];
    }
  );

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
