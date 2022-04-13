import java.io.*;
import java.lang.*;
import java.util.*;

public class Main19598 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        PriorityQueue<Integer> taskQ = new PriorityQueue<>((a, b) -> a - b);

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            pq.offer(new int[] { start, end });
        }

        while (!pq.isEmpty()) {
            int[] tmp = pq.poll();

            if (!taskQ.isEmpty() && taskQ.peek() <= tmp[0]) {
                taskQ.poll();
            }
            taskQ.offer(tmp[1]);
        }

        System.out.println(taskQ.size());
    }
}
