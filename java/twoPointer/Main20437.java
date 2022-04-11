package twoPointer;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main20437 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine());

        for (int t = 0; t < T; t++) {
            String str = br.readLine();

            int min = Integer.MAX_VALUE;
            int max = Integer.MIN_VALUE;

            List<List<Integer>> list = new ArrayList<>();

            for (int l = 0; l < 27; l++) {
                list.add(new ArrayList<>());
            }

            for (int j = 0; j < str.length(); j++) {
                list.get(str.charAt(j) - 'a').add(j);
            }

            int K = Integer.parseInt(br.readLine());

            for (int i = 0; i < list.size(); i++) {
                if (list.get(i).size() >= K) {
                    for (int j = 0; j <= list.get(i).size() - K; j++) {
                        max = Math.max(max, list.get(i).get(j + K - 1) - list.get(i).get(j) + 1);
                        min = Math.min(min, list.get(i).get(j + K - 1) - list.get(i).get(j) + 1);
                    }
                }
            }

            if (min == Integer.MAX_VALUE) {
                System.out.println(-1);
            } else {
                System.out.println(min + " " + max);
            }
        }
    }
}
