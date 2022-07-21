import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modern-racism',
  templateUrl: './modern-racism.component.html',
  styleUrls: ['./modern-racism.component.scss']
})
export class ModernRacismComponent implements OnInit {
  racismCards: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    return this.racismCards = [
      {
        title: 'Racism Against the Black Community',
        content: [
          {paragraph: 'The 13th Amendment reads: “neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.” The United States makes up only 4% of the world population but accounts for 25% of the world’s prison population. Although the black community only accounts for 13% of the total population they make up nearly 40% of the US prison population. Although there is no correlation between race and consumption of marijuana you are 3.7 times more likely to be arrested for marijuana charges if you\'re black. One study that supports the idea of police being outright racist was conducted by Stanford, where they analysed 95 million arrests across 21 states from 2011-2018. The conclusion of the study was that once it got dark enough that police couldn’t see into cars there was significantly less racial bias in arrests. '},
          {paragraph: 'There are tons of examples of the United States directly hindering economic growth in the Black community post slavery whether it was the racial divison established in The New Deal’s welfare programs, the racially motivated war on drugs, the attack on Black Wall Street, or red lining the pattern of racism is very clear to anyone paying attention. One way that some of these kinds of things are still occurring today is through privatisation. Banks like Wells Fargo have been guilty of taking longer to process Black applications only to reject them, make them go through a lengthy appeal, or accept them at higher than market interest rates. If you are Black you are 2.7 times more likely to be rejected for a home loan. The average white family has a net worth of $132,000 while Black families have a net worth average of just $9,000.'},
          {paragraph: 'This is very brief and by no means comprehensive but I feel like this is enough information to make the point that you either believe these inequalities stem from intrinsic (internal) factors or extrinsic (environmental) factors. If you believe that Black people are intrinsically more likely to live in poverty or be arrested you are racist. You cannot believe that all men and women are created equal and hold a belief that one race is inherently dumb or violent. The only explanation for these statistics is that the United States of America is fundamentally a racist country. '},
        ]
      },
      {
        title: 'Racism Against the Native Community',
        content: [
          {paragraph: ''},
        ]
      },
    ]
  }

}
