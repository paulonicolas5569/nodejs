/**
 jogo genios
 @author Paulo Nicolas, Weslley Moreira
*/

//vetor para armazenar a sequencia a cada rodada
int sequencia[32] = {};

//vetor para armazenar os leds
int leds [] = {2,3,4,5};

//vetor para armazenar as notas musicais (Dó Ré Mi Fá) 
int tons[] = {262, 294, 330, 349 };

//variavel usada para saber a rodada
int rodada = 0;
void setup() {
  // leds
    pinMode(2, OUTPUT);    //VERDE
    pinMode(3, OUTPUT); //VERMELHO
    pinMode(4, OUTPUT);  //AZUL
    pinMode(5, OUTPUT);  //AMARELO
    //apoio a logica
    Serial.begin(9600);
    //referencia a inicializaçao da funçao random()
    randomSeed(analogRead(A0));
    //Buzzer 
pinMode(6, OUTPUT);
} 

void loop() {
  proximaRodada();
  reproduzirSequencia();
  delay(3000);  
}

//funçao proxima rodada (sorteio da sequencia a ser reproduzida na proxima rodada)
void proximaRodada(){
sequencia[rodada] = random(4); //sorteio 0 1 2 3 
//apoio a logica
Serial.print(sequencia[rodada]);
rodada = rodada + 1;
}

//funçao reproduzir sequencia sorteada
void reproduzirSequencia(){
  for(int i = 0; i < rodada; i++){
    tone(6, tons[sequencia[i]]);
    digitalWrite(leds[sequencia[i]], HIGH);
    delay(300);
    noTone(6);
    digitalWrite(leds[sequencia[i]], LOW);
    delay(200);
  }
}
