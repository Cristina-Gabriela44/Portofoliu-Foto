Proiectul meu: Galerie Foto cu Rating

Buna ziua! Acesta este un proiect pe care l-am facut ca sa invat cum functioneaza legatura dintre un site (partea de design) si o baza de date (unde salvam informatiile). Este o galerie foto unde poti sa dai note pozelor tale preferate.

-Ce face site-ul?

1.Poti vedea pozele la dimensiune mare daca dai click pe ele.
2.Poti sa le filtrezi pe categorii (peisaje, portrete etc.).
3.Cel mai important: poti lasa o nota de la 1 la 5 stele.
*Notele nu dispar la refresh pentru ca se salveaza direct in baza de date MySQL prin PHP.*

-Ce am folosit:

1.HTML & CSS: Pentru structura si design (am folosit Flexbox ca sa fie totul aliniat).
2.JavaScript: Pentru partea de interactivitate si pentru a trimite notele la server fara sa se reincarce pagina (Fetch API).
3.PHP: Ca sa fac legatura cu baza de date.
4.MySQL: Unde am creat tabelul pentru stocarea notelor.

-Cum il pornesti la tine pe PC:

Daca vrei sa testezi proiectul meu local, urmeaza pasii astia:
1.Descarca fisierele si pune-le in folderul htdocs din XAMPP.
2.Deschide XAMPP Control Panel si porneste Apache si MySQL.
3.Mergi in browser la localhost/phpmyadmin si fa o baza de date noua numita galerie_foto.
Importa sau ruleaza codul de mai jos in tab-ul SQL ca sa faci tabelul:

CREATE TABLE recenzii (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nume_utilizator VARCHAR(50),
    poza_evaluata VARCHAR(100),
    nota INT,
    data_ora DATETIME DEFAULT CURRENT_TIMESTAMP
);
