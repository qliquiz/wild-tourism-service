import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class PasswordHeaderGuard implements CanActivate {
  private readonly requiredPassword = process.env.KEY;

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const password = request.headers['moder-password'];

    if (!password || password !== this.requiredPassword) throw new UnauthorizedException('Доступ запрещён');

    return true;
  }
}