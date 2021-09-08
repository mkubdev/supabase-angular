import {Component, Input, OnInit} from '@angular/core';
import {Profile, SupabaseService} from "./../supabase.service";
import {Session} from "@supabase/supabase-js";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  loading = false;
  profile: Profile | undefined;

  @Input() session: Session | undefined;

  constructor(private readonly supabase: SupabaseService) { }

  ngOnInit() {
    this.getProfile();
  }

  async getProfile() {
    try {
      this.loading = true;
      let {data: profile, error, status} = await this.supabase.profile;

      if (error && status !== 406) {
        throw error;
      }

      if (profile) {
        console.log(profile)
        this.profile = profile;
      }
    } catch (error) {
      alert(error.message)
    } finally {
      this.loading = false;
    }
  }

  async updateProfile(username: string, website: string, avatar_url: string = '') {
    try {
      this.loading = true;
      await this.supabase.updateProfile({username, website, avatar_url});
    } catch (error) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }

  async signOut() {
    await this.supabase.signOut();
  }
}