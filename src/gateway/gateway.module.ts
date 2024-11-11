import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { GatewayService } from './gateway.service';

@Module({
  imports: [
    JwtModule.register({
      secret:  process.env.JWT_SECRET, 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [GatewayService],
  exports: [GatewayService], 
})
export class GatewayModule {}
