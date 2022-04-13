package unionFind;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main3830 {
    static int parent[];
    static long dist[];
    static int n, m;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        while (n != 0 && m != 0) {
            parent = new int[n + 1];
            dist = new long[n + 1];

            for (int i = 1; i <= n; i++) {
                parent[i] = i;
            }

            for (int t = 0; t < m; t++) {
                st = new StringTokenizer(br.readLine());
                String type = st.nextToken();

                if (type.equals("!")) {
                    int a = Integer.parseInt(st.nextToken());
                    int b = Integer.parseInt(st.nextToken());
                    long w = Long.parseLong(st.nextToken());
                    union(a, b, w);
                } else {
                    int a = Integer.parseInt(st.nextToken());
                    int b = Integer.parseInt(st.nextToken());

                    if (find(a) != find(b)) {
                        sb.append("UNKNOWN\n");
                    } else {
                        sb.append(dist[b] - dist[a] + "\n");
                    }
                }
            }

            st = new StringTokenizer(br.readLine());
            n = Integer.parseInt(st.nextToken());
            m = Integer.parseInt(st.nextToken());
        }
        System.out.println(sb.toString());
    }

    static int find(int id) {
        if (parent[id] == id)
            return id;
        int pid = find(parent[id]);
        dist[id] += dist[parent[id]];
        return parent[id] = pid;
    }

    static void union(int a, int b, long diff) {
        int pa = find(a);
        int pb = find(b);

        if (pa == pb)
            return;

        dist[pb] = dist[a] - dist[b] + diff;
        parent[pb] = pa;
        return;
    }
}
