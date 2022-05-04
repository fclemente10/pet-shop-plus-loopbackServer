import { Configuration } from './sdk';

const sdkConfigurationFactory = (environment: any) => {
 const returnValue = new Configuration();
 returnValue.basePath = "http://localhost:3000";

 return returnValue;

};

export let sdkConfigurationProvider = { provide: Configuration,
    useFactory: sdkConfigurationFactory, 
    deps: ['environment']
};

