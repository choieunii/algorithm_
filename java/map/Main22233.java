package map;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main22233 {
    static int N, M;
    static String[] keyWord;
    static Map<String, Integer> map = new HashMap<>();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        for (int i = 0; i < N; i++) {
            map.put(br.readLine(), 0);
        }

        int answer = N;

        for (int i = 0; i < M; i++) {
            String memo[] = br.readLine().split(",");

            for (String s : memo) {
                if (map.containsKey(s)) {
                    map.remove(s);
                    answer--;
                }
            }

            System.out.println(answer);
        }
    }
}
// https://www.acmicpc.net/problem/22233