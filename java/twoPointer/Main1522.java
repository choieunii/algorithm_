package twoPointer;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1522 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str = br.readLine();
        int aCnt = 0;
        int min = Integer.MAX_VALUE;

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'a')
                aCnt++;
        }

        for (int i = 0; i < str.length(); i++) {
            int bCnt = 0;
            for (int j = i; j < aCnt + i; j++) {
                if (str.charAt(j % str.length()) == 'b')
                    bCnt++;
            }
            min = Math.min(min, bCnt);
        }

        System.out.println(min);
    }
}
