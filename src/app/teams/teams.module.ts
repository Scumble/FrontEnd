import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { routing }  from './teams.routing';
import { TeamComponent } from './teams.component';
import { AuthGuard } from '../auth.guard';
import { Globals } from '../globals';
import { TeamService } from '../services/teams.services';
import { AddTeam } from './addteams/addteams.component';
import { PlayerService } from '../services/players.services';
import { AllTeamComponent } from './allTeams/allTeams.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [AddTeam,AllTeamComponent],
  providers:    [AuthGuard, TeamService,Globals,PlayerService]
})
export class TeamModule { }