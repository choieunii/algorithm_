package greedy;

import java.io.*;
import java.util.*;

class Job {
    public int start;
    public int end;

    public Job(int s, int e) {
        start = s;
        end = e;
    }
}

class Main1931 {
    static int N, M;
    static int[][] map;
    static boolean[][] visited;
    static ArrayList<Integer> counts = new ArrayList<>();
    static int index;
    static StringTokenizer st;
    static Job[] arr;
    static ArrayList<Integer> dp = new ArrayList<>();

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.valueOf(bf.readLine());
        arr = new Job[N];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(bf.readLine(), " ");
            int s = Integer.valueOf(st.nextToken());
            int e = Integer.valueOf(st.nextToken());
            arr[i] = new Job(s, e);
        }

        Arrays.sort(arr, (a, b) -> {
            if (a.end == b.end)
                return a.start - b.start;
            return a.end - b.end;
        });

        int start = -1;
        int count = 0;
        for (int i = 0; i < N; i++) {
            if (start > arr[i].start) {
                continue;
            }
            start = arr[i].end;
            count += 1;

        }
        System.out.println(count);
    }
}
