import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../../generated/client';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
