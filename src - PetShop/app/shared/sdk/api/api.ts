export * from './pingController.service';
import { PingControllerService } from './pingController.service';
export * from './productController.service';
import { ProductControllerService } from './productController.service';
export const APIS = [PingControllerService, ProductControllerService];
