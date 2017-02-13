import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.scss']
})
export class TestRouteComponent implements OnDestroy, OnInit {
  id: number;
  product: string;
  price: number;
  openLinkProps = false;
  routeSubscription: Subscription;
  querySubscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    // this.id = activateRoute.snapshot.params['id'];
    this.routeSubscription = this.activateRoute.params.subscribe( params => this.id = params['id']);
    this.querySubscription = this.activateRoute.queryParams.subscribe(
      (queryParam: any) => {
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
