package string;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main12919 {
    static String start;
    static String end;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        start = br.readLine();
        end = br.readLine();

        playABGame(end);
        System.out.println("0");

    }

    static void playABGame(String str) {
        if (str.equals(start)) {
            System.out.println("1");
            System.exit(0);
        }
        if (str.length() == 0)
            return;

        if (str.charAt(str.length() - 1) == 'A') {
            playABGame(removeAB(str));
        }

        str = new StringBuilder(str).reverse().toString();
        if (str.charAt(str.length() - 1) == 'B') {
            playABGame(removeAB(str));
        }
    }

    static String removeAB(String str) {
        return str.substring(0, str.length() - 1);
    }

    // static void playABGame(String str) {
    // if (str.equals(end)) {
    // System.out.println("1");
    // System.exit(0);
    // }
    // if (str.length() > end.length())
    // return;
    // playABGame(appendA(str));
    // playABGame(appendBAndReverse(str));
    // }

    // static String appendA(String str) {
    // return str + "A";
    // }

    // static String appendBAndReverse(String str) {
    // return new StringBuilder(str).append("B").reverse().toString();
    // }

}
