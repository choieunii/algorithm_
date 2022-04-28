package algorithm;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1541 {
    static int answer = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String ex = br.readLine();
        String[] str = ex.split("-");
        for (int i = 0; i < str.length; i++) {
            int tmp = mySum(str[i]);

            if (i == 0) {
                answer = answer + tmp;
            } else {
                answer = answer - tmp;
            }
        }
        System.out.println(answer);
    }

    static int mySum(String a) {
        int sum = 0;
        String tmp[] = a.split("[+]");
        for (int i = 0; i < tmp.length; i++) {
            sum += Integer.parseInt(tmp[i]);
        }
        return sum;
    }
}
