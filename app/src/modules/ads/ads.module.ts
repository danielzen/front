import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';

import { CommonModule } from '../../common/common.module';
import { LegacyModule } from '../legacy/legacy.module';
import { BlogModule } from '../../plugins/blog/blog.module';
import { GroupsModule } from '../../plugins/Groups/groups.module';

import { BoostAds } from './boost';
import { GoogleAds } from './google-ads';
import { RevContent } from './revcontent';
import { Taboola } from './taboola';
import { PDAds } from './pd-ads';

@NgModule({
  imports: [NgCommonModule, CommonModule],
  declarations: [BoostAds, GoogleAds, RevContent, Taboola, PDAds],
  exports: [BoostAds, GoogleAds, RevContent, Taboola, PDAds]
})
export class AdsModule {}
