> **BASE CONVERTER**
>
> **Show manual calculation, long division and math included**

Hey, as you know, it may be hard to prepare on exams truly, if what they
demand from you is not exactly available on the internet toolkit.

 All those online binary converters seem to forget that what counts for
education is understanding of the process, not jumping to the result. If
what we need is just the conversion output computers do it already
perfectly behind the scenes.

 If, however the **desire is to learn why it is the case** that

 (edae)~16 ~is equal to (60846 )~10~

Or why 5 is represented as 101 in binary?

**Guess what? You are in the right place.**

 

 Most of computer science courses expects students to calculate binary
conversions manually, performing long division and presenting
calculations including mathematic formulae.

For this reason, I build the tool that helps you target those small
mistakes exactly, up to the exact line of calculation. Additionally, you
can learn better if

input Value\
input Base\
output Base\
Go

(edae )~16~ = ( 14×16^3^ + 13×16^2^ + 10×16^1^ + 14×16^0^ )~10~ =
(14\*4096 + 13\*256 + 10\*16 + 14\*1 )~10~ = (57344 + 3328 + 160 + 14
)~10~ = (60846 )~10~ = ( 1×2^15^ + 1×2^14^ + 1×2^13^ + 0×2^12^ +
1×2^11^ + 1×2^10^ + 0×2^9^ + 1×2^8^ + 1×2^7^ + 0×2^6^ + 1×2^5^ +
0×2^4^ + 1×2^3^ + 1×2^2^ + 1×2^1^ + 0×2^0^ )~10~ = (1110110110101110
)~2~

+---------------+---------------+--------------------+-----------------+
| > **Decimal** | > **Divisor** | > **Whole Result** | > **Remainder** |
+===============+===============+====================+=================+
| 60846         | /2            | =30423             | R=0             |
+---------------+---------------+--------------------+-----------------+
| 30423         | /2            | =15211             | R=1             |
+---------------+---------------+--------------------+-----------------+
| 15211         | /2            | =7605              | R=1             |
+---------------+---------------+--------------------+-----------------+
| 7605          | /2            | =3802              | R=1             |
+---------------+---------------+--------------------+-----------------+
| 3802          | /2            | =1901              | R=0             |
+---------------+---------------+--------------------+-----------------+
| 1901          | /2            | =950               | R=1             |
+---------------+---------------+--------------------+-----------------+
| 950           | /2            | =475               | R=0             |
+---------------+---------------+--------------------+-----------------+
| 475           | /2            | =237               | R=1             |
+---------------+---------------+--------------------+-----------------+
| 237           | /2            | =118               | R=1             |
+---------------+---------------+--------------------+-----------------+
| 118           | /2            | =59                | R=0             |
+---------------+---------------+--------------------+-----------------+
| 59            | /2            | =29                | R=1             |
+---------------+---------------+--------------------+-----------------+
| 29            | /2            | =14                | R=1             |
+---------------+---------------+--------------------+-----------------+
| 14            | /2            | =7                 | R=0             |
+---------------+---------------+--------------------+-----------------+
| 7             | /2            | =3                 | R=1             |
+---------------+---------------+--------------------+-----------------+
| 3             | /2            | =1                 | R=1             |
+---------------+---------------+--------------------+-----------------+
| 1             | /2            | =0                 | R=1             |
+---------------+---------------+--------------------+-----------------+
