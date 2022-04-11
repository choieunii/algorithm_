package greedy;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main17615 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        String[] ball = br.readLine().split("");
        int r = 0, b = 0;
        int min = Integer.MAX_VALUE;

        for (int i = 0; i < N; i++) {
            if (ball[i].equals("R")) {
                r++;
            } else {
                b++;
            }
        }
        min = Math.min(r, b);
        int rcnt1 = 0, bcnt1 = 0;

        for (int i = 0; i < N; i++) {
            if (ball[i].equals("B"))
                break;
            rcnt1++;
        }

        for (int i = 0; i < N; i++) {
            if (ball[i].equals("R"))
                break;
            bcnt1++;
        }

        int rcnt2 = 0, bcnt2 = 0;

        for (int i = N - 1; i >= 0; i--) {
            if (ball[i].equals("B"))
                break;
            rcnt2++;
        }

        for (int i = N - 1; i >= 0; i--) {
            if (ball[i].equals("R"))
                break;
            bcnt2++;
        }

        min = Math.min(min, r - rcnt2);
        min = Math.min(min, r - rcnt1);
        min = Math.min(min, b - bcnt2);
        min = Math.min(min, b - bcnt1);

        System.out.println(min);
    }
}
